import productData from '../assets/fake-data/products';

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import ProductCart from '../components/ProductCart';
import Section,{SectionBody,SectionTitle} from '../components/Section';
import ProductView from '../components/ProductView';

const Product = (props) => {
    const product = productData.getProductBySlug(props.match.params.slug);
    const replatedProducts = productData.getProducts(8)

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {
                            replatedProducts.map((product, index) => (
                                <ProductCart 
                                    key={index}
                                    img01={product.image01}
                                    img02={product.image02}
                                    name={product.title}
                                    price={product.price}
                                    slug={product.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Product;
