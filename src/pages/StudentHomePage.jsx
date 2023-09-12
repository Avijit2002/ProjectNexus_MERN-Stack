
import Header from '../components/Header';
import Card from '../components/Card';
import Account from '../components/Account';
import Myprojects from '../components/Myprojects';
import Project from '../components/Project';
import Button from "../components/Button"
import Addproject from '../components/Addproject';
import Bookmark from '../components/Bookmark';
import Collaborate from '../components/Collaborate';
import { useState } from 'react';



export default function StudentHomePage({post}){
    //console.log(post[0])
    //post.map((pos)=>{console.log(pos)})

    return(
      <div className="homePage pages">
        <div className="header">
          <Header post={post}/>
        </div>
        <div style={{height:'95%'}}>
          <Account />
          <Card>
            <Myprojects />
          </Card>
        </div>
        <div className='scroll-div' style={{height:'98%',overflowY:'scroll'}} >
          <Card>
            <Addproject />
          </Card>
          {post.map((pos)=><Card><Project post={pos} key={pos.key}/></Card> )}
          
        </div>
        <div style={{height:'95%'}}>
          <Card>
            <Bookmark />
          </Card>
          <Card>
            <Collaborate />
          </Card>
          <Card>
            <Button>Leaderboard</Button>
          </Card>
        </div>
      </div>
    )
}