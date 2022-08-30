import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4dae2a8a587349e3b1053b384924c8b1`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}><NewsItem title={element.title === null ? element.title : element.title.slice(0, 50)} description={element.description === null ? element.description : element.description.slice(0, 100)} imageUrl={element.urlToImage ? element.urlToImage : `https://elegalmetrology.jharkhand.gov.in/japnet/images/news.jpg`} newsUrl={element.url} /></div>
                    })}

                </div>
            </div>
        )
    }
}

export default News