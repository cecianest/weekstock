// Navigation and result tools shared by the local and browser-only versions.
let reflectionDay=0;
function financialNavigation(index){return `<nav class="financial-company-nav" aria-label="재무제표 기업 선택">${stocks.map((s,i)=>`<button type="button" data-financial-company="${i}" aria-pressed="${i===index}"><b>${s.name}</b><span class="financial-read-status" data-financial-status="${i}"></span></button>`).join('')}</nav>`;}
function bindWorkflowFeatures(){
 document.querySelectorAll('[data-financial-company]').forEach(button=>button.onclick=()=>{
  const before=document.querySelector('.financial-statement').getBoundingClientRect().top;
  selected=Number(button.dataset.financialCompany);render();
  const details=document.querySelector('.financial-statement');details.open=true;
  window.scrollBy(0,details.getBoundingClientRect().top-before);
  details.querySelector(`[data-financial-company="${selected}"]`)?.focus({preventScroll:true});
 });
 document.querySelectorAll('[data-reflection-day]').forEach(button=>button.onclick=()=>{
  reflectionDay=Number(button.dataset.reflectionDay);
  document.querySelector('#judgment-review').outerHTML=judgmentReview();
  bindWorkflowFeatures();scaleTerminalType();
  document.querySelector(`[data-reflection-day="${reflectionDay}"]`)?.focus({preventScroll:true});
 });
}
function judgmentReview(){
 if(state.day!==4)return '';
 const archive=state.archives.find(a=>a.day===reflectionDay);
 const labels={positive:'호재',negative:'악재',neutral:'중립'};
 return `<section class="panel judgment-review" id="judgment-review"><div class="section-head"><h2>내 판단 돌아보기</h2><span>월–목 기록</span></div><div class="reflection-days" role="group" aria-label="판단한 날짜">${days.slice(0,4).map((d,i)=>`<button type="button" data-reflection-day="${i}" aria-pressed="${reflectionDay===i}">${d}</button>`).join('')}</div><p class="reflection-context">가격 변화만으로 판단의 정답·오답을 정하지 않아요. 당시 어떤 근거로 판단했는지 돌아보세요.</p>${(archive?.items||[]).map((item,i)=>{
  const key=reflectionDay+'-'+i,judgment=state.judgments?.[key],note=state.notes?.[key],price=stocks[i].history[reflectionDay],next=stocks[i].history[reflectionDay+1],change=next-price;
  return `<article class="reflection-card"><div class="reflection-company"><b>${escapeHtml(item.name)}</b><span class="reflection-judgment ${labels[judgment]?'memo-judgment-'+judgment:''}">${labels[judgment]||'판단 기록 없음'}</span></div><h3>${escapeHtml(item.title)}</h3><blockquote>${note?escapeHtml(note):'작성한 메모가 없어요.'}</blockquote><div class="reflection-price"><span>${days[reflectionDay]} ${money(price)}원 → ${days[reflectionDay+1]} ${money(next)}원</span><b class="${change>=0?'up':'down'}">${signed(change)}원 (${change>0?'+':''}${(change/price*100).toFixed(2)}%)</b></div></article>`;
 }).join('')}</section>`;
}

// Render a fixed-width, high-resolution result card without third-party services.
function createResultCanvas(){
 if(state.day!==4)throw Error('금요일 결산에서 저장할 수 있어요.');
 const held=stocks.map((s,i)=>({...s,...state.hold[i]})).filter(s=>s.q>0);
 const value=held.reduce((sum,s)=>sum+s.price*s.q,0),total=state.cash+value,gain=total-1000000;
 const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1390+Math.max(1,held.length)*102;
 const c=canvas.getContext('2d');if(!c)throw Error('이미지 생성을 지원하지 않는 브라우저입니다.');
 const ink='#e5edf8',muted='#9daec4',line='#31445e',accent='#82aaff';
 const text=(content,x,y,size=28,color=ink,weight=400,align='left')=>{c.fillStyle=color;c.font=`${weight} ${size}px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif`;c.textAlign=align;c.fillText(content,x,y);};
 const rule=y=>{c.strokeStyle=line;c.lineWidth=2;c.beginPath();c.moveTo(88,y);c.lineTo(992,y);c.stroke();};
 const card=(y,h)=>{c.fillStyle='#1a293e';c.beginPath();c.roundRect(48,y,984,h,24);c.fill();c.strokeStyle=line;c.lineWidth=2;c.stroke();};
 c.fillStyle='#111c2d';c.fillRect(0,0,canvas.width,canvas.height);
 text('위크스탁',64,86,32,accent,700);text('금요일 · 최종 결산',1016,86,26,muted,400,'right');
 text('나의 투자 결과',540,184,52,ink,700,'center');
 card(232,384);text('최종 총자산',540,300,30,muted,400,'center');
 text(money(total)+'원',540,397,76,ink,700,'center');
 text('총손익 '+signed(gain)+'원 ('+(gain/10000).toFixed(2)+'%)',540,460,34,gain>=0?'#ff8794':'#79b5ff',700,'center');
 rule(504);text('시작 자금',92,564,27,muted);text('1,000,000원',988,564,30,ink,700,'right');
 card(644,330);
 [['보유 현금',money(state.cash)+'원'],['주식 평가액',money(value)+'원'],['실현손익',signed(state.realized)+'원'],['평가손익',signed(gain-state.realized)+'원']].forEach(([label,amount],i)=>{text(label,92,711+i*69,28,muted);text(amount,988,711+i*69,30,ink,700,'right');});
 const holdingHeight=142+Math.max(1,held.length)*102;card(1002,holdingHeight);text('보유 종목',92,1065,30,ink,700);text('수량 · 평가액',988,1065,24,muted,400,'right');rule(1096);
 if(!held.length)text('보유한 주식이 없어요. 현금으로 보유 중입니다.',92,1168,28,muted);
 held.forEach((s,i)=>{const y=1164+i*102;text(s.name,92,y,30,ink,700);text(s.q+'주 · '+money(s.q*s.price)+'원',988,y,29,ink,700,'right');text('평균매입가 '+money(s.avg)+'원',92,y+36,23,muted);});
 const bottom=1002+holdingHeight;text('매수 '+state.logs.filter(l=>l.side==='매수').length+'회 · 매도 '+state.logs.filter(l=>l.side==='매도').length+'회',64,bottom+68,26,muted);text('월–목 거래 · 금요일 결산',64,bottom+112,23,muted);
 text('위크스탁 투자 체험',1016,canvas.height-44,23,accent,400,'right');
 return canvas;
}
async function saveResultImage(){
 const button=document.querySelector('[data-action="save-result"]');if(!button||button.disabled)return;
 button.disabled=true;button.textContent='이미지 만드는 중…';
 try{
  await document.fonts.ready;
  const canvas=createResultCanvas();
  const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('이미지를 만들지 못했어요.')),'image/png'));
  const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='위크스탁_나의투자결과.png';document.body.append(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),60000);
  toast('결과 이미지를 저장했어요.');
 }catch(e){toast(e.message||'이미지를 저장하지 못했어요. 다시 시도해 주세요.');}
 finally{button.disabled=false;button.textContent='결과 이미지 저장 ↓';}
}
