import React, { useEffect, useState } from 'react'
import style from './Result.module.css'
import Star from '../../asset/image/Star.png'
import Navbar from '../../Component/modules/navbar'
import { Link, useLocation } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import axios from 'axios'
import Empty from '../../asset/image/5259951.jpg'

const Resultpage = () => {

    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('')
    const [pagination, setPagination] = useState()

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API}/products?search=${query.get('q')}`);
                setProducts(data.item);
                const arr = []
            } catch (err) {
                console.error(err);
            }
        };

        fetch();
    }, []);
    const handleSort = async(e) =>{
      setSort(e.target.value)
      const {data} = await axios(`${process.env.REACT_APP_BACKEND_API}/products?search=${query.get('q')}&${e.target.value}`)
      setProducts(data.item)
    }
    const handlePagination = (value) =>{
        axios.get(`${process.env.REACT_APP_BACKEND_API}/products?&limit=3&page=${value}`)
        .then((res)=>{
            console.log(res, 'pagination');
            setProducts(res.data.item)
        })
    }
    return (
        <div>
            <Navbar/>
            {products.length === 0 ?  
           <div className="container"> 
                <div className={style.wrapper}>
                    <img className={style.images} src={Empty} alt="" />         
                    <div className={style.default}>
                        Oops! Couldn't find any matches Product <br/>
                        <span>try to find with another keyword</span>
                        </div>
                    
                </div>
            </div>
            :  
            <div className="container"> 
            <div className="row">
            <div className={style.filter_Wrap}>
                    <h5>Filter : </h5> 
                    <select className={`form-select ${style.select}`} onChange={(e) => handleSort(e)}>
                        <option selected disabled hidden>Price</option>
                        <option value="sortBy=price&sort=ASC">Lowest</option>
                        <option value="sortBy=price&sort=DESC">Highest</option>
                    </select>              
                    {/* <div className="dropdown">
                        <a className={`btn dropdown-toggle ${style.button}`} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Price
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><button className="dropdown-item" onClick={handleASC}>Lowest</button></li>
                            <li><button className="dropdown-item" onClick={handleDESC}>Highest</button></li>
                        </ul>
                    </div>  */}
            </div>  
            {products.map((product) => (         
                    <div className={`col-xs-6 col-sm-4 ${style.col_md_24}`} key={product.idProduct}>
                        <div className={`card card-md-5 ${style.cardS}`}>
                            <Link to={"/product/" + product.idProduct}>
                                <img className={`card-img-top ${style.image}`} src={product.image}
                                    alt="Card image cap" />
                            </Link>
                            <div className={`card-body ${style.card_Body}`}>
                                <h5 className="card-title">{product.productName}</h5>
                                {/* <h5 className="card-title">Black & White</h5> */}
                                <h5 className={`card-title ${style.pr}`}>Rp.{product.price}</h5>
                                <p className="card-text">{product.brands}</p>
                                <div className={style.starcard}>
                                    <img className={style.str_imgC} src={Star} alt="" />
                                    <img className={style.str_imgC} src={Star} alt="" />
                                    <img className={style.str_imgC} src={Star} alt="" />
                                    <img className={style.str_imgC} src={Star} alt="" />
                                    <img className={style.str_imgC} src={Star} alt="" />
                                    <p className={style.ratecard}>(10)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.paginationWrapper}>
                <Pagination count={pagination?.currentpageNumber} shape="rounded" onChange={handlePagination} />
            </div>
            </div>}
        </div>
    )
}

export default Resultpage
