import {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import ProductCart from './ProductCart';

const InfinityList = (props) => {
    const listRef = useRef(null);
    const perLoad = 6;
    const [data, setData] = useState(props.data.slice(0, perLoad));
    const [load, setLoad] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setData(props.data.slice(0, perLoad));
        setIndex(1);
    }, [props.data]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (
                    window.scrollY + window.innerHeight >=
                    listRef.current.clientHeight + listRef.current.offsetTop + 200
                ) {
                    setLoad(true);
                }
            }
        });
    }, [listRef]);

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(props.data.length / perLoad);
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

            if (load && index <= maxIndex) {
                const start = perLoad * index;
                const end = start + perLoad;

                setData(data.concat(props.data.slice(start, end)));
                setIndex(index + 1);
            }
        };
        getItems();
        setLoad(false);
    }, [index, load, data, props.data]);

    return (
        <div ref={listRef}>
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
                {data.map((product, index) => (
                    <ProductCart
                        key={index}
                        img01={product.image01}
                        img02={product.image02}
                        name={product.title}
                        price={product.price}
                        slug={product.slug}
                    />
                ))}
            </Grid>
        </div>
    );
};

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default InfinityList;
