import './App.css';
import {useState} from 'react';

function Article(props){

  return <article>
    <h2> {props.title}</h2>
    {props.body}
</article>
}
function Header(props){
  return <header>
  <h1><a href='/' onClick={(event)=>{
    event.preventDefault();//클릭해도 리로드 방지
    props.onChangeMode();
  }}>{props.title}</a></h1>      
  </header>
}
function Nav(props){
  const lis = [];
  for(let i=0;i<props.topics.length;i++){
    let t= props.topics[i];
    lis.push(<li key= {t.id}><a id= {t.id} href={'/read'+t.id} onClick= {(event)=>{
      event.preventDefault();//클릭해도 리로드 방지
      props.onChangeMode(event.target.id);//event를 발생시키는 태그를 가져옴 거기서 id를 가져옴
    }}>{t.title}</a></li>)
  }
  return <nav>
  <ol>
  {lis}
  </ol>
</nav>
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1,title:'Html', body:'html is ...'},
    {id:2,title:'Css', body:'css is ...'},
    {id:3,title:'Java', body:'javascript is ...'},
  ]
  let content =null;
  if(mode==='WELCOME'){
    content = <Article title="Welcome" body = "Hello, Welcome"></Article>
  }
  else if (mode==='READ'){
    let title, body = null;

    for(let i=0;i<topics.length;i++){
      console.log(topics[i].id);
      if(topics[i].id===parseInt(id)){
  
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Article title={title} body = {body}></Article>
  }
  return (
    <div>
      <Header title = "제목" onChangeMode = {()=>{
        setMode('WELCOME');
      }}></Header>

      <Nav topics = {topics} onChangeMode = {(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>

      {content}
    </div>


  );
}

export default App;
