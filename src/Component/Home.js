import React, { Component } from 'react'
import { Card,Button} from 'react-bootstrap'
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props)
            this.state={
                dataApi=[],
            };
    }
    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/wathe`).then((res)=>{
            this.setState({dataApi:res.data});
        });
        
    };
    handelSubmit=(image_url,title, description,toUSD)=>{
            let config={
                method:"Post",
                baseURL:process.env.REACT_APP_BACKEND_URL,
                Url:"/watchnew",
                data:{
                    image_url:image_url,
                     title:title,
                   description:description,
                   toUSD:toUSD,
                }
            }
            axios(config);
        };
    render() {
        return (
            <div>
                {this.state.dataApi.map((item)=>{
                return (
                    <Card>
                        <Card.Img variant="top" src={item.image_url}/>
                        <Card.Body>

                        <Card.Title> {item.title}</Card.Title>
                        <Card.description>{item.description}</Card.description>
                        <Button onClick={()=>this.handelSubmit(image_url,title,description)}
                        variant="danger"
                        > Add-To-watch-list</Button>
                        </Card.Body>

                    </Card>

                );
                })}
                
            </div>
        );
    }
}

export default Home
