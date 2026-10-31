(()=>{
// Server-only educational scenario, never served to the browser.
const companies=[['바삭푸드','식품','BF','#4d8d62'],['플레이온','게임','PO','#8b67bf'],['해빛에너지','에너지','HE','#c18b2e'],['바로배송','배송','BD','#4b7fae'],['로보메이트','로봇','RM','#62758e']];
const prices=[[10000,20000,24000,15000,30000],[9600,20000,24000,15000,32400],[10800,18400,25200,14200,31200],[10600,18800,25000,14600,32000],[11000,19000,24600,14800,32200]];
const news=[
[['원재료값 상승, 가격은 당분간 유지','밀가루 가격이 올랐지만 제품 가격은 유지합니다. 고객 부담은 줄지만 이익이 줄어들 수 있습니다.'],['새 게임 개발 인력 채용','새 게임을 위해 개발자를 채용합니다. 개발 역량은 높아지지만 인건비가 먼저 늘어납니다.'],['공공시설 태양광 사업 입찰 참여','공공시설 태양광 사업에 도전합니다. 계약이 확정된 것은 아니며 경쟁 기업도 참여합니다.'],['주말 주문 증가, 연료비도 상승','주문이 늘었습니다. 매출 증가가 기대되지만 차량 운행 비용도 커졌습니다.'],['물류 로봇 기술 시연 예정','새 물류 로봇을 공개할 예정입니다. 성능과 실제 생산 비용은 아직 확인해야 합니다.']],
[['신제품 판매 회복 조짐','원재료 부담은 남아 있지만 새 과자의 판매량이 회복되고 있습니다. 판매 증가가 비용을 얼마나 보완할지 살펴야 합니다.'],['개발팀 확대, 비용 부담 공개','월요일 채용 계획에 이어 개발비 증가 규모를 공개했습니다. 좋은 게임으로 이어질지 아직 알 수 없습니다.'],['공공시설 설비 수주 확정','참여했던 사업의 일부 설비 계약을 따냈습니다. 다만 설치 비용과 경쟁 상황을 함께 살펴야 합니다.'],['주문은 늘었지만 연료비 부담 지속','추가 주문을 확보했습니다. 그러나 연료비가 높아 이익이 주문만큼 늘지는 않을 수 있습니다.'],['기술 시연 호평, 양산 비용 과제','시연에서 좋은 평가를 받았습니다. 하지만 대량 생산 비용을 낮추는 과제는 남았습니다.']],
[['학교 급식 공급 계약 체결','새 급식 공급 계약을 맺었습니다. 매출 증가가 기대되지만 원재료 가격 상승은 여전히 부담입니다.'],['신작 출시 일정 1주 연기','개발 중인 게임의 완성도를 높이기 위해 출시가 미뤄졌습니다. 매출은 늦어지지만 이용자 만족도가 높아질 수도 있습니다.'],['태양광 설비 지원 사업 발표','가상의 설비 지원 사업이 발표됐습니다. 수요 증가가 예상되지만 경쟁 기업도 함께 혜택을 받습니다.'],['배송 지역 확대, 초기 비용 증가','새 지역으로 서비스를 넓힙니다. 고객은 늘 수 있지만 물류센터와 인력을 위한 비용이 먼저 필요합니다.'],['돌봄 로봇 시범 운영 시작','새 돌봄 로봇을 시범 운영합니다. 실제 사용자 평가를 확인해야 하며 대량 공급 계약은 아직 정해지지 않았습니다.']],
[['급식 원재료 공동 구매 협의','급식 계약을 이행하기 위해 공동 구매를 협의합니다. 원가를 낮출 수 있지만 협의는 아직 끝나지 않았습니다.'],['연기된 신작 테스트 반응 공개','이용자 테스트에서 조작감이 개선됐다는 반응이 나왔습니다. 실제 출시 성과와는 차이가 있을 수 있습니다.'],['지원 사업 참여 기업 증가','새 지원 사업에 참여하려는 기업이 늘었습니다. 전체 시장은 커질 수 있지만 가격 경쟁도 심해질 수 있습니다.'],['확대 지역 첫 주 주문 증가','새 지역의 주문이 늘었습니다. 초기 시설 비용을 회수하려면 꾸준한 주문이 이어져야 합니다.'],['돌봄 로봇 사용자 반응 공개','시범 운영에서 편리하다는 반응이 나왔습니다. 유지 비용과 안전 점검을 확인한 뒤 계약 여부를 결정할 예정입니다.']]
];
const reportText=[[],
['원재료 상승과 제품 가격 유지에 따른 비용 부담이 반영된 것으로 볼 수 있어요.','개발 역량에 대한 기대와 인건비 부담이 함께 있어 가격은 같았습니다.','입찰 참여만으로 계약을 확신하기 어려워 가격이 유지된 것으로 볼 수 있어요.','주문 증가 기대와 연료비 부담이 함께 반영되어 가격이 유지됐습니다.','기술 시연에 대한 기대가 반영된 것으로 해석할 수 있어요.'],
['화요일 알려진 신제품 판매 회복 기대가 반영된 것으로 볼 수 있어요.','화요일 공개된 개발비 부담을 우려하는 판단이 반영된 것으로 볼 수 있어요.','화요일 확정된 설비 수주에 대한 기대가 반영된 것으로 볼 수 있어요.','주문 증가보다 지속되는 연료비 부담이 주목받은 것으로 볼 수 있어요.','시연에 대한 호평 이후에도 양산 비용 부담이 남아 있음을 반영한 것으로 볼 수 있어요.'],
['공급 계약 기대에도 원가 부담이 계속된다는 우려가 반영된 것으로 볼 수 있어요.','출시 연기 우려와 함께 품질 개선에 대한 기대도 반영된 것으로 볼 수 있어요.','지원 사업 기대 속에서 경쟁 기업도 수혜를 본다는 점이 반영된 것으로 볼 수 있어요.','새 지역에서 고객을 확보할 수 있다는 기대가 일부 반영된 것으로 볼 수 있어요.','돌봄 로봇 시범 운영에 대한 기대가 반영된 것으로 볼 수 있어요.'],
['공동 구매로 비용을 낮출 수 있다는 기대가 반영된 것으로 볼 수 있어요.','신작 테스트에서 나온 개선 반응에 대한 기대가 반영된 것으로 볼 수 있어요.','지원 사업의 성장 기대와 함께 경쟁 심화 우려가 반영된 것으로 볼 수 있어요.','확대 지역의 주문 증가가 반영됐지만 시설 비용 부담은 남아 있습니다.','사용자 반응이 반영됐지만 유지 비용과 최종 계약 여부는 여전히 확인해야 해요.']];


// Fixed, deterministic fictional past. Independent of unreleased lesson prices.
const LESSON_DATES=['2026-10-26','2026-10-27','2026-10-28','2026-10-29','2026-10-30'];
function makePast(base,stock,startDate="2025-10-26",endDate=LESSON_DATES[0]){const dates=[];for(let d=new Date(startDate+'T00:00:00Z');d<new Date(endDate+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+1)){if(d.getUTCDay()!==0&&d.getUTCDay()!==6)dates.push(d.toISOString().slice(0,10));}let seed=4127+stock*1907;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};let noise=0;const series=dates.map((date,i)=>{const t=i/(dates.length-1);noise=noise*.83+(random()-.5)*.016;const shape=.84+.145*t+.052*Math.sin(t*12+stock)-.052*t*Math.sin(12+stock)+.024*Math.sin(t*37+stock*2)+noise;return {date,close:Math.max(100,Math.round(base*shape/10)*10)};});const anchor=series.at(-1).close;return series.map(p=>({...p,close:Math.round(p.close/anchor*base/10)*10}));}
function historyFor(stock,day,prices){const recent=makePast(prices[0][stock],stock);return [...makePast(recent[0].close,stock,"2023-10-26","2025-10-26"),...recent,...LESSON_DATES.slice(0,day+1).map((date,i)=>({date,close:prices[i][stock]}))];}


// Fictional article bodies; each remains within information released that day.
const context=[
[
['바삭푸드는 주요 원재료인 밀가루의 구매 비용이 올라 제품 생산비가 늘어났다고 밝혔다. 회사는 당분간 제품 가격을 유지하며 소비자 반응과 원재료 시장 상황을 살펴볼 계획이다.','가격을 그대로 두면 소비자가 느끼는 부담을 줄일 수 있다. 그러나 같은 수량을 팔더라도 재료비로 나가는 돈이 늘면 회사에 남는 이익은 줄어들 수 있다. 판매량과 비용을 함께 확인할 필요가 있다.'],
['플레이온은 새 게임을 개발하기 위해 개발 인력을 채용한다고 밝혔다. 회사는 게임의 기능과 조작감을 개선하는 데 새 인력을 투입할 예정이다.','인력 확충은 개발 역량을 높이는 데 도움이 될 수 있다. 다만 게임이 출시되어 매출을 올리기 전에도 인건비는 발생한다. 채용 계획만으로 게임의 성공이나 회사의 이익 증가를 확정하기는 어렵다.'],
['해빛에너지가 공공시설에 태양광 설비를 설치하는 사업의 입찰에 참여한다. 입찰은 여러 기업의 제안을 비교해 사업을 맡길 회사를 정하는 절차다. 현재 계약 상대는 정해지지 않았다.','사업을 따내면 설비 공급 기회가 생길 수 있지만 참여 자체가 수주를 의미하지는 않는다. 경쟁 기업의 제안과 실제 설치 비용도 결과에 영향을 줄 수 있다.'],
['바로배송은 주말 주문량이 늘었다고 밝혔다. 회사는 주문 증가가 배송 서비스 이용 확대의 신호인지 확인하며 차량과 인력을 운영하고 있다.','주문이 늘면 매출을 높일 기회가 생긴다. 반면 연료비 상승으로 배송 한 건을 처리하는 비용도 늘고 있다. 주문 수가 늘었다는 사실과 이익이 늘었다는 판단은 구분해서 살펴야 한다.'],
['로보메이트가 물류 작업을 돕는 새 로봇의 기술 시연을 준비한다. 시연에서는 로봇이 정해진 작업을 수행하는 모습을 공개할 예정이다. 실제 성능 평가는 시연 이후 확인할 수 있다.','기술을 공개하면 잠재 고객의 관심을 모을 수 있다. 다만 시연이 잘 진행되더라도 많은 수량을 안정적으로 생산할 수 있는지, 생산 비용을 감당할 수 있는지는 별도로 확인해야 한다.']
],
[
['바삭푸드는 신제품 과자의 판매량이 회복되는 조짐을 보였다고 밝혔다. 월요일 공개한 원재료 비용 부담이 이어지는 가운데 나온 소식이다.','더 많은 제품을 팔면 늘어난 재료비를 보완할 기회가 생긴다. 하지만 판매량이 어느 정도 늘었는지, 회복이 얼마나 이어질지는 아직 충분히 확인되지 않았다. 매출과 비용의 변화가 함께 중요해졌다.'],
['플레이온은 월요일 발표한 개발 인력 확충 계획에 따라 개발비 부담도 커진다고 설명했다. 회사는 추가 인력을 새 게임 제작에 투입한다는 계획을 유지하고 있다.','개발팀 확대는 품질 개선에 도움이 될 수 있지만 비용이 먼저 발생한다. 투자자는 늘어난 지출이 향후 성과로 연결될지 살펴야 한다. 현재 공개된 정보만으로 출시 이후의 판매 실적을 알 수는 없다.'],
['해빛에너지는 참여했던 공공시설 태양광 사업에서 일부 설비 공급 계약을 따냈다고 밝혔다. 월요일의 입찰 참여가 실제 계약으로 이어진 것이다.','계약을 확보하면 사업 기회가 구체화된다. 다만 계약이 있다는 사실만으로 이익 규모가 정해지는 것은 아니다. 설비 설치에 필요한 비용과 작업 진행 상황도 함께 확인해야 한다.'],
['바로배송은 추가 주문을 확보했지만 연료비 부담이 이어지고 있다고 밝혔다. 월요일 알려진 주문 증가와 비용 상승이 함께 지속되는 모습이다.','주문 확대는 서비스 수요를 보여 준다. 그러나 차량 운행에 들어가는 지출이 높은 상태라면 매출 증가가 같은 크기의 이익 증가로 이어지지 않을 수 있다. 주문량만으로 회사의 상황을 판단하기는 어렵다.'],
['로보메이트는 물류 로봇 기술 시연에서 좋은 평가를 받았다고 밝혔다. 월요일 예고한 기술 공개가 이루어지며 로봇의 기능에 대한 관심이 높아졌다.','회사는 대량 생산 비용을 낮추는 과제가 남아 있다고 설명했다. 시연 환경에서 기능을 보여 주는 것과 실제 고객에게 많은 제품을 공급하는 것은 다른 단계다. 기술 평가와 양산 가능성을 함께 살펴야 한다.']
],
[
['바삭푸드가 새로운 학교 급식 공급 계약을 맺었다고 밝혔다. 화요일 알려진 신제품 판매 회복 조짐에 이어 공급처를 확보한 소식이 추가됐다.','새 계약은 제품을 판매할 기회를 늘릴 수 있다. 하지만 월요일부터 이어진 원재료 가격 부담은 사라지지 않았다. 계약으로 기대되는 매출과 계약을 이행하는 데 필요한 비용을 함께 살펴야 한다.'],
['플레이온은 개발 중인 신작 게임의 출시 일정을 1주 미룬다고 밝혔다. 회사는 게임의 완성도를 높이기 위한 결정이라고 설명했다. 개발 인력을 늘린 뒤 일정 변경 소식이 나온 것이다.','출시가 늦어지면 게임 판매로 매출을 올리는 시점도 늦어질 수 있다. 반면 추가 개발이 이용자 만족도를 높일 가능성도 있다. 일정 지연이라는 사실만으로 출시 후 성과까지 판단할 수는 없다.'],
['태양광 설비 지원을 위한 가상의 사업 계획이 발표됐다. 공공시설 설비 수주를 확보한 해빛에너지도 새로운 사업 환경을 살펴보고 있다.','지원이 확대되면 설비를 찾는 수요가 늘어날 수 있다. 그러나 지원은 해빛에너지 한 기업만을 위한 것이 아니다. 경쟁 기업도 같은 기회를 얻을 수 있어 시장 성장과 회사의 성과를 구분해 보아야 한다.'],
['바로배송이 배송 가능한 지역을 넓힌다고 밝혔다. 회사는 새 지역에서 고객을 확보하기 위해 물류센터와 배송 인력을 준비한다.','배송 지역 확대는 더 많은 주문을 받을 기회다. 하지만 시설과 인력에 들어가는 비용은 주문 매출이 충분히 쌓이기 전부터 필요하다. 기존의 연료비 부담과 새로운 초기 비용이 함께 고려할 요소가 됐다.'],
['로보메이트가 돌봄 로봇 시범 운영을 시작한다. 물류 로봇 기술 시연 이후 다른 사용 환경에서 로봇을 시험하는 새로운 단계다. 회사는 실제 이용자의 반응을 확인할 예정이다.','시범 운영은 제품의 장점과 개선할 점을 발견하는 과정이다. 현재 대량 공급 계약은 확정되지 않았다. 시범 운영을 시작했다는 소식과 판매 계약을 확보했다는 소식은 구분해야 한다.']
],
[
['바삭푸드가 급식 공급에 필요한 원재료를 공동 구매하는 방안을 협의하고 있다. 수요일 확보한 급식 계약을 이행하면서 비용 부담을 줄이려는 움직임이다.','공동 구매가 성사되면 구매 조건을 개선할 가능성이 있다. 다만 현재는 협의 단계이며 실제 비용 절감이 확정된 것은 아니다. 계약 확보와 원가 개선은 서로 연결되지만 각각 확인이 필요한 사안이다.'],
['플레이온이 출시를 미룬 신작의 이용자 테스트 반응을 공개했다. 테스트에서는 조작감이 개선됐다는 반응이 나왔다. 회사는 추가 개발 기간에 완성도를 높이고 있다.','테스트 반응은 게임을 개선하는 데 참고가 될 수 있다. 그러나 제한된 테스트의 반응이 전체 이용자의 선택이나 실제 판매량을 그대로 보여 주지는 않는다. 출시 연기에 따른 비용 부담도 함께 살펴볼 부분이다.'],
['태양광 설비 지원 사업에 참여하려는 기업이 늘고 있다. 수요일 발표된 지원 계획 이후 여러 회사가 새로운 사업 기회를 검토하는 모습이다.','참여가 늘면 전체 시장이 커질 가능성이 있지만 업체 간 가격 경쟁도 심해질 수 있다. 해빛에너지의 기존 수주와 새 사업의 경쟁 환경은 별개의 정보다. 시장에 좋은 소식이 모든 기업에 같은 성과를 주는 것은 아니다.'],
['바로배송은 새로 서비스를 시작한 지역에서 첫 주 주문이 늘었다고 밝혔다. 수요일 발표한 지역 확대 이후 이용자 반응이 나타나고 있다.','초기 주문 증가는 고객을 확보할 수 있다는 기대를 줄 수 있다. 다만 물류센터와 인력에 투입한 비용을 회수하려면 주문이 꾸준히 이어져야 한다. 첫 반응과 장기적인 운영 성과는 구분해 볼 필요가 있다.'],
['로보메이트는 돌봄 로봇 시범 운영에서 편리하다는 사용자 반응이 나왔다고 밝혔다. 수요일 시작한 시범 운영을 통해 실제 사용 경험을 모으고 있다.','도입 여부를 판단하기 전에는 유지 비용과 안전 점검도 확인할 예정이다. 좋은 반응이 있다는 사실만으로 공급 계약이 확정된 것은 아니다. 기술의 편리함과 지속적으로 운영할 수 있는 조건을 함께 살펴야 한다.']
]];
function articleFor(day,stock,news){return {id:`${day}-${stock}`,paragraphs:context[day][stock]};}


let sessions={};try{sessions=JSON.parse(localStorage.getItem('weekstock-public-data-v1'))||{};}catch{}
function persist(){localStorage.setItem('weekstock-public-data-v1',JSON.stringify(sessions));}
function initial(){return {day:0,closed:false,cash:1000000,hold:companies.map(()=>({q:0,avg:0})),realized:0,logs:[]};}
function learningStatus(s){const day=s.day;return {articles:companies.map((_,i)=>Boolean(s.articleReads?.[`${day}-${i}`])),memos:companies.map((_,i)=>Boolean(s.notes?.[`${day}-${i}`]?.trim()&&['positive','negative','neutral'].includes(s.judgments?.[`${day}-${i}`]))),reports:Boolean(s.reportReads?.[day])};}
function ready(s){const l=learningStatus(s);return l.articles.every(Boolean)&&l.memos.every(Boolean)&&l.reports;}
function publicState(s){const stocks=companies.map(([name,sector,code,color],i)=>({name,sector,code,color,price:prices[s.day][i],prev:prices[Math.max(0,s.day-1)][i],base:prices[0][i],history:prices.slice(0,s.day+1).map(p=>p[i]),priceHistory:historyFor(i,s.day,prices),news:s.day<4?news[s.day][i][0]:null,body:s.day<4?news[s.day][i][1]:null,report:s.day?reportText[s.day][i]:null}));return {...s,notes:s.notes||{},judgments:s.judgments||{},learning:learningStatus(s),stocks,dayName:days[s.day],archives:news.slice(0,Math.min(4,s.day+1)).map((items,day)=>({day,dayName:days[day],items:items.map(([title,body],i)=>({name:companies[i][0],title,body,...articleFor(day,i,news)}))}))};}

function send(res,status,data){if(status>=400)throw Error(data.error);return data;}
window.pagesApi=async(route,body={})=>{const url={pathname:'/api/'+route},res=null,req={method:'POST',headers:{'x-session-token':window.pagesToken}};
 if(url.pathname==='/api/start'&&req.method==='POST'){let token=body.token,s=sessions[token];if(!s){token=crypto.randomUUID();s=sessions[token]=initial();persist();}return send(res,200,{token,...publicState(s)});}
 const token=req.headers['x-session-token'],s=sessions[token];if(!s)return send(res,401,{error:'다시 접속해 주세요.'});if(req.method!=='POST')return send(res,405,{error:'허용되지 않은 동작입니다.'});
 if(url.pathname==='/api/reset'){sessions[token]=initial();persist();return send(res,200,publicState(sessions[token]));}
 if(url.pathname==='/api/read'){const {day,stock,type}=body;if(!Number.isInteger(day)||day<0||day>3||day>s.day)return send(res,400,{error:'공개된 거래일만 읽을 수 있습니다.'});if(type==='reports'){s.reportReads=s.reportReads||{};s.reportReads[day]=true;}else{if(!Number.isInteger(stock)||stock<0||stock>4)return send(res,400,{error:'기업을 확인해 주세요.'});s.articleReads=s.articleReads||{};s.articleReads[`${day}-${stock}`]=true;}persist();return send(res,200,{learning:learningStatus(s)});}
 if(url.pathname==='/api/note'){const {day,stock,text,judgment}=body;if(!Number.isInteger(day)||day<0||day>3||day>s.day||!Number.isInteger(stock)||stock<0||stock>4||typeof text!=='string'||!text.trim()||text.length>2000||!['positive','negative','neutral'].includes(judgment))return send(res,400,{error:'호재·악재·중립 중 하나를 선택하고 판단 이유를 적어 주세요.'});if(!s.articleReads?.[`${day}-${stock}`])return send(res,409,{error:'기사를 먼저 열어 읽어 주세요.'});s.notes=s.notes||{};s.judgments=s.judgments||{};s.notes[`${day}-${stock}`]=text;s.judgments[`${day}-${stock}`]=judgment;persist();return send(res,200,{notes:s.notes,judgments:s.judgments,learning:learningStatus(s)});}
 if(url.pathname==='/api/trade'){
 if(s.day>=4||s.closed)return send(res,409,{error:'오늘 거래는 이미 마감되었습니다.'});if(body.day!==s.day)return send(res,409,{error:'날짜가 변경되었습니다. 새로고침해 주세요.'});if(!ready(s))return send(res,403,{error:'오늘의 5개 기업 기사 메모와 기자의 시장노트 읽기를 완료해 주세요.'});
 const i=body.stock,q=body.q,side=body.side,r=String(body.reason||'').trim();if(!Number.isInteger(i)||i<0||i>4||!Number.isSafeInteger(q)||q<1||!['buy','sell'].includes(side))return send(res,400,{error:'수량은 1주 이상의 정수로 입력해 주세요.'});
 if(r.length>2000)return send(res,400,{error:'사유는 2,000자 이내로 적어 주세요.'});const h=s.hold[i],price=prices[s.day][i],cost=q*price;
 if(side==='buy'&&!r)return send(res,400,{error:'매수 사유를 적어 주세요.'});if(side==='buy'&&cost>s.cash)return send(res,400,{error:'보유 현금이 부족합니다.'});if(side==='sell'&&q>h.q)return send(res,400,{error:'보유 수량이 부족합니다.'});
 if(side==='buy'){h.avg=(h.avg*h.q+cost)/(h.q+q);h.q+=q;s.cash-=cost;}else{s.realized+=(price-h.avg)*q;h.q-=q;s.cash+=cost;if(!h.q)h.avg=0;}
 s.logs.push({stock:i,name:companies[i][0],side:side==='buy'?'매수':'매도',q,price,day:s.day,dayName:days[s.day],reason:r});persist();return send(res,200,publicState(s));}
 if(url.pathname==='/api/close'){if(body.day!==s.day||s.day>=4||s.closed)return send(res,409,{error:'이미 마감했거나 날짜가 변경되었습니다.'});s.closed=true;persist();return send(res,200,publicState(s));}
 if(url.pathname==='/api/next'){if(!s.closed||s.day>=4)return send(res,409,{error:'현재 거래를 먼저 마감해 주세요.'});s.day++;s.closed=s.day===4;persist();return send(res,200,publicState(s));}
 return send(res,404,{error:'존재하지 않는 요청입니다.'});
};
})();