import {Link} from 'react-router-dom';

import Helmet from '../components/Helmet';
import HeroSlide from '../components/HeroSlide';
import PolicyCart from '../components/PolicyCart';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import Grid from '../components/Grid';
import ProductCart from '../components/ProductCart';

import heroSliderData from '../assets/fake-data/hero-slider.js';
import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/products';
import banner from '../assets/images/banner.png';

const Home = () => {
    return (
        <Helmet title='Trang Chủ'>
            <HeroSlide data={heroSliderData} control={true} auto={true} timeOut={5000} />
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => (
                            <Link to='policy' key={index}>
                                <PolicyCart
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>top sản phẩm bán chạy</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(4).map((product, index) => (
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
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>sản phẩm mới</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((product, index) => (
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
                </SectionBody>
            </Section>
            <Section>
                <SectionBody>
                    <Link to='/catalog'>
                        <img src={banner} alt='web banner' />
                    </Link>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>phổ biến</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(12).map((product, index) => (
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
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Home;
