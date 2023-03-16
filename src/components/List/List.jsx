import React from 'react'
import "./List.css"

// const datas = [
//     {
//         "title": "Apple",
//         "img": "https://via.placeholder.com/600/92c952",
//     },
//     {
//         "title": "Organe",
//         "img": "https://via.placeholder.com/600/92c952",
//     },
//     {
//         "title": "Durin",
//         "img": "https://via.placeholder.com/600/92c952",
//     }

// ];



const List = ({ item }) => {
    return (
        <div>
            <div className='row'>
                <hr />
                <div className='row-list'>
                    <p>{item.name}</p>
                    <img src={item.image} alt="image1" className='image' />
                </div>
            </div>

            {/* <div className='row'>
            <hr />
            <div className='row-list'>
                <p>Apple</p>
                <img src={datas[1].img} alt="image1" className='image' />
            </div>
        </div>
        <div className='row'>
            <hr />
            <div className='row-list'>
                <p>Apple</p>
                <img src={datas[1].img} alt="image1" className='image' />
            </div>
        </div> */}
            {/* {
            datas.map( (item) => 
                <div key={item.id}>
                <hr/>
                <div className='row-list'>
                    <p>{item.name}</p>
                    <img src={item.img} alt="image1" className='mainImg' />
                </div>
                </div>
            )
        } */}

            {/* <div className='row-list'>
                <p>{datas.name[1]}</p>
                <img src={datas.img[1]} alt="image1" className='mainImg' />
            </div>
            <div className='row-list'>
                <p>{datas.name[2]}</p>
                <img src={datas.img[2]} alt="image1" className='mainImg' />
            </div> */}

        </div>
    )
}

export default List
