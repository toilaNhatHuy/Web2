import "./DetailProductPage.css";
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

import { CartContext } from '../CartContext/CartContext';

function Detail() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    

    const handleSizeChange = (size) => {
        setSelectedSize(size);
      };
    
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change)); 
      };

    useEffect(() => {
        const products = [
            {  id: 1,
                name: "Men's Checkered Long Sleeve Button Shirt",
                price: 27.6,
                salePrice: 22.8,
                mainImg: "https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg",
                images: [
                    "https://i.pinimg.com/736x/ab/44/73/ab44736245c77fe9bd1e88ed3c659f6a.jpg",
                    "https://omcne.com/cdn/shop/products/men-s-checkered-long-sleeve-button-shirt-anotherchill-3_01d8fb9a-f2ac-4ce0-8ba3-11bdf125b4a8_large.jpg?v=1687096415",
                    "https://omcne.com/cdn/shop/products/men-s-checkered-long-sleeve-button-shirt-anotherchill-2_e635aa1d-9fdf-4388-881a-3d39816822a9_large.jpg?v=1687096414",
                    "https://omcne.com/cdn/shop/products/men-s-checkered-long-sleeve-button-shirt-anotherchill-4_41eb626f-61b5-4a06-bc46-afa668172efb_large.jpg?v=1687096415"
                ]
            },
            {
                id: 2,
                name: "Aelfric Eden Corduroy Plaid Fake Two Jacket",
                price: 17.2,
                salePrice: 14.1,
                mainImg: "https://www.aelfriceden.com/cdn/shop/files/ff2e5330fbded4e46a9c51e24fe9d487_0d5bbd92-e32c-4934-bca3-c38fd6344bca.jpg?v=1716550710&width=700",
                images: [
                    "https://www.aelfriceden.com/cdn/shop/files/ff2e5330fbded4e46a9c51e24fe9d487_0d5bbd92-e32c-4934-bca3-c38fd6344bca.jpg?v=1716550710&width=700",
                    "https://www.aelfriceden.com/cdn/shop/products/2_3d6e5f46-1779-4d94-a7d3-6d23b1843ef1.jpg?v=1716550688&width=700",
                    "https://www.aelfriceden.com/cdn/shop/products/1_3b9a27c0-ce3f-413b-b5b7-d52d44240d8a.jpg?v=1716550688&width=700",
                    "https://www.aelfriceden.com/cdn/shop/files/3_8009747d-f7c7-48ca-afc1-0b8e4338e4a9.jpg?v=1716550715&width=700"
                ]
            },
            {
                id: 3,
                name: "Minaka Long Sleeve Button Shirt",
                price: 21.9,
                salePrice: 18.3,
                mainImg: "https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR03o4qasdK78rvyQ8Dw-DEB9sN-XRLCtMUYSOhPl2bywdpcHlT3J2EC11A_aem_5q19ckyflqDb52uiYVLr8A",
                images: [
                    "https://i.pinimg.com/736x/11/cb/44/11cb445863666f6e300d54d1738f63a5.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR03o4qasdK78rvyQ8Dw-DEB9sN-XRLCtMUYSOhPl2bywdpcHlT3J2EC11A_aem_5q19ckyflqDb52uiYVLr8A",
                    "https://img.lazcdn.com/g/p/4baf3e991b9f5cbfe188cc052c232e9f.jpg_720x720q80.jpg_.webp",
                    "https://img.lazcdn.com/g/p/d3557c403d55b39387f536ec622b4503.jpg_720x720q80.jpg_.webp",
                    "https://img.lazcdn.com/g/p/856c9c957fee2c578fd6118a5a993733.jpg_720x720q80.jpg_.webp"
                ]
            },
            {
                id: 4,
                name: "White Striped T-shirt",
                price: 11.3,
                salePrice: 8.8,
                mainImg: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mcfp21e5",
                images: [
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mcfp21e5",
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mvzfkpe0",
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mwuc2he2",
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqu9g3mc08t5ac"
                ]
            },
            {
                id: 5,
                name: "Aqua Checkered Long Sleeve Button Shirt",
                price: 26.5,
                salePrice: 21.4,
                mainImg: "https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0wjfJ4am7eJURuJDZfVBRJON4Qb9dp2DxMZ_rIMc3ATNnhD3OAqEBtMv0_aem_6jU93gZyXEvldFe6KKjtig",
                images: [
                    "https://i.pinimg.com/736x/05/06/14/050614405263341552bd1a7d9fc7466c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0wjfJ4am7eJURuJDZfVBRJON4Qb9dp2DxMZ_rIMc3ATNnhD3OAqEBtMv0_aem_6jU93gZyXEvldFe6KKjtig",
                    "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/10/14/source-img/20191014113357_85293.jpg?impolicy=high",
                    "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/10/14/source-img/20191014113357_94659.jpg?impolicy=high",
                    "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/10/14thumb-img/1570995604746456294.jpg"
                ]
            },
            {
                id: 6,
                name: "Red Striped Shirt",
                price: 24.6,
                salePrice: 19.7,
                mainImg: "https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22HN_d9NURHlczbxVB6N2rTH3IHZrJoMRTILwbZyYUEZoVS57xshEFbS8_aem_tP8Q0Ujq57XkiyzbX8jfvw",
                images: [
                    "https://i.pinimg.com/736x/55/56/b9/5556b9ab637eae7a6816c20460af5189.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22HN_d9NURHlczbxVB6N2rTH3IHZrJoMRTILwbZyYUEZoVS57xshEFbS8_aem_tP8Q0Ujq57XkiyzbX8jfvw",
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/456584767_1273995853569495_2955611457725609062_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=o3M-g8v75KoQ7kNvgEvrV4b&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AdGPlUJ9MRpX8koLiOlsote&oh=03_Q7cD1QH5O-1fC4aohp3VEhTHnCoIDiNSFBNd3NXC-206O7YOZw&oe=66FADB29",
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/457146628_1046208117078532_5373071280302710705_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=SIBtm5epXDsQ7kNvgGcdnTB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AaYFfOk3ffBBJVaqEDdvQI9&oh=03_Q7cD1QE9zgaXScuX8hakhnUfK4GhtTLIU1gPB0WR3m6cUHpGfw&oe=66FADCAC",
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/457396735_1935889166886610_3573752050786989380_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Nj7Lwl1ZcOQQ7kNvgFJChmo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEV5MK9AgAJMdPwOSRvYQt0INCYdkZTM2dx-VqoaREY7g&oe=66FAAF36"
                ] },
                {
                    id: 7,
                    name: "Hombres Capucha térmica",
                    price: 20.1,
                    salePrice: 16.0,
                    mainImg: "https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg",
                    images: [
                        "https://i.pinimg.com/736x/e1/3f/17/e13f1765e6560f9749d312100026834e.jpg",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456925406_881183220564816_1568716079090569980_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=juvrt3NoGpYQ7kNvgEDh-D2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QED_VSlhbwBot2g6w9IG6ppwdLFVD1cBOuN5fS9NE2CGg&oe=66FB57A3",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457539577_2593922970809809_4484952040563192789_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=I_vNT6yyEfUQ7kNvgGO79zt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFIwRLQ9rUoCzaNEkroaIb7eGpnogV6tck3Dpdqf7mMXw&oe=66FB792E",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457396729_1238799454217829_3916000068725350073_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_0q6mwR-4R0Q7kNvgEiStTb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF7sw_KOtC8xRNMNjRQJ1TUasUntPhEvp87ReEPfKpzkg&oe=66FB8957"
                    ]
                },
                {
                    id: 8,
                    name: "Contrast Color Pullover Hoodie Mens",
                    price: 29.8,
                    salePrice: 23.8,
                    mainImg: "https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg",
                    images: [
                        "https://i.pinimg.com/736x/12/88/63/128863c4c327c466728ebe7babd41196.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/71N3NmXtQzL.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR1xrU7mu5XYGbe-sqifQQj1CcvRQNMNFTDf3Q1uO32bsi0uOpJXRAgoe7w_aem_SEylh8KvgF_4DnVijAQx4Q",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456898778_920661746471494_1096794584770649126_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vpiiAxXwrDgQ7kNvgE7xdt4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGVBx2CeeH-5zFhvPrI6NxIo08G3cu_BIy6CPYZ4wzlpg&oe=66FB5F23",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456911929_521884047048762_2382304043217244811_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6Jz4coFvh1oQ7kNvgHZpSff&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHKRnAHucnQble_uL-X75qGnSpmQ_PKTrE2YRwjBQNr1g&oe=66FB66F2"
                    ]
                },
                {
                    id: 9,
                    name: "Waffle Pattern Hoodie",
                    price: 20.0,
                    salePrice: 16.0,
                    mainImg: "https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg",
                    images: [
                        "https://i.pinimg.com/736x/42/41/f1/4241f1a00b71ef6159adbb02326c46a3.jpg",
                        "https://img.ltwebstatic.com/images3_pi/2023/09/22/9f/16953653772f453bd5903b0077c44b4a29c79e1a62_thumbnail_720x.webp",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457213675_3148625125279855_2638093509196415249_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DCHEtbTKREkQ7kNvgFmdajN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF5IItZsMNmt1ytziQhP7nrPiAvtKt_LQu-t71D2cIXpw&oe=66FB6B63",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457269975_1036675411167326_2894181700929059719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DJSpZxsnabYQ7kNvgGvgH-h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE8xa3zw8IFXTIC4Kujh-7PJUKaokrmnwlRXa1xRgmy0g&oe=66FB826D"
                    ]
                },
                {
                    id: 10,
                    name: "Men's New York Hoodies",
                    price: 17.6,
                    salePrice: 14.0,
                    mainImg: "https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg",
                    images: [
                        "https://i.pinimg.com/736x/0e/25/1e/0e251e9e3f57d53b6d13a9c1e9be355b.jpg",
                        "https://img.ltwebstatic.com/images3_spmp/2023/12/15/64/1702608297d7be7fa1df1ed82116d653174d735050_thumbnail_720x.webp?fbclid=IwZXh0bgNhZW0CMTEAAR1J_bTPS54bEhOSfzbKYFfEIF7apo6SqflEzS_1m3Ut5YJbmdiSa5_GGVY_aem_Q150DBQd4dUVAI11UsRU5g",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456548333_442588774758467_279713761888071775_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=I2fjp_kXK_UQ7kNvgFjIVP3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AiTSEQBluiOi8yiJoeEpOhW&oh=03_Q7cD1QElu8x011nhX1fF71TbDd3OaKLCXSxpZgjgrUItNUpGKw&oe=66FB65F0",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457252711_486590487557144_3009231355707821772_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=YMKxWCAQ060Q7kNvgHMgTSE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFDCmZ6W1wwFZFXrNDMNO_U-QEfF48Q7PKIpXY7nrJlWA&oe=66FB7174"
                    ]
                },
                {
                    id: 11,
                    name: "Color Block Sleeve Hoodies",
                    price: 24.2,
                    salePrice: 19.3,
                    mainImg: "https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg",
                    images: [
                        "https://i.pinimg.com/736x/e0/73/37/e0733752f60f259cd3a47e35cfc1c3d5.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/61bJkG1V82L.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/7107LFqgnEL.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/61wGC7-72yL.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR14_IqFqYI2YrlMEZ4W0tkHiaArJ6R33HcPQnlkGmWDJd4LOJHGVjpBCBY_aem__3QT_5SjOTNfk9MN_g1rIQ"
                    ]
                },
                {
                    id: 12,
                    name: "Aonga - Hoodie for Men",
                    price: 20.4,
                    salePrice: 16.32,
                    mainImg: "https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg",
                    images: [
                        "https://i.pinimg.com/736x/31/92/d4/3192d43791a6b5c0eea11327b2a17446.jpg",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457208594_527765536468637_3132902209712956793_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_Qxwg-nexCwQ7kNvgG6GZa0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEA7G-pBJfHlI1D-OX1Todfqb-2QgtjlYh8EgXqxZN89w&oe=66FB7E9E",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456909046_383152618162153_5639213089081022096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=dTACJYbYYuUQ7kNvgE5Z6Tq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEX8WtZrQX2_jD8QTfIVQahHELlbatuguBK3TCTr687UA&oe=66FB5CCA",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456911915_380230871791537_4949888046943132146_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=COQ4cPXfIOsQ7kNvgG7Wmh3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFJgkteXmjn1cuDwc21PkIe5t0wjOYHjK4LMdE9iu2AZQ&oe=66FB7A83"
                    ]
                },
                {
                    id: 13,
                    name: "Pull Lapin Motifs Japonais 'Saitama'",
                    price: 17.2,
                    salePrice: 13.8,
                    mainImg: "https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg",
                    images: [
                        "https://i.pinimg.com/736x/6d/d4/ee/6dd4eee674ddbf9c417d605061b94381.jpg",
                        "https://media-assets.grailed.com/prd/listing/19309526/246a2a1fea3b46c28ab70f76d5f1403c?w=1250",
                        "https://media-assets.grailed.com/prd/listing/19309526/a561adcd62624e599f8f9de54ca6cb77?w=1250",
                        "https://media-assets.grailed.com/prd/listing/19309526/62e34bf90b91412a8bb4a1fdd6735279?w=1250&fbclid=IwZXh0bgNhZW0CMTEAAR3HkdWKGYPcYYZxIdNfSg5M7161q2cjietzewSODmXDKm-KChi4LRw9Ayg_aem_Bul8qXxXgc8xTjofQb3frA"
                    ]
                },
                {
                    id: 14,
                    name: "Herren Strickpullover mit Katzenmuster",
                    price: 17.8,
                    salePrice: 14.24,
                    mainImg: "https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg",
                    images: [
                        "https://i.pinimg.com/736x/1d/19/25/1d1925a7ab9a6abc6ec4c10430499e7a.jpg",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457253864_1714887305913994_7041744672025960850_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=oDP6bz8RcDoQ7kNvgEChZH5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGC2P2n5-GxT_taTk1p42qeNjPJ3ENTJTLKgb_VgIJatg&oe=66FB665A",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457396737_1595235768002506_3450350909452136501_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Pe0CTjc8tLcQ7kNvgHHAr9s&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGpGSEigBoJ6asDwQUVQd4_EnMmunxRdbbBTl7YkvmsKQ&oe=66FB7187",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457257837_693715429632634_7446084379705491586_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Bzs9YXn1RCkQ7kNvgFtNUj5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE1loFlMEFzfBNY4_SFkjOdH7Cn-r5fL0wSCKMKGtNWKg&oe=66FB5D04"
                    ]
                },
                {
                    id: 15,
                    name: "Stylish Letter Knitted Sweater",
                    price: 26.9,
                    salePrice: 21.5,
                    mainImg: "https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg",
                    images: [
                        "https://i.pinimg.com/736x/1e/49/08/1e490818c8c2dfa6e7196d70081f5e80.jpg",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457535018_514717054480225_4657510659908192382_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OcEZK0a6uHIQ7kNvgFN8H5G&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHZ6XKrotnyZidF0BABTgC7DetD7Kr-ykGw31RoJdsbbg&oe=66FB63B2",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457530508_1252531429094200_5287590032427913717_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=AGlZBiuBzd4Q7kNvgHE7ypL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEX2YAu4i43AMmS_u2vf2ZY4h9sDc88NNGu0mLzbLJCRQ&oe=66FB72C1",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456905482_888394503155305_208149927891376904_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QCFSlpxOOpAQ7kNvgHuQnqu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGL3mpbaENA3OkFxuIFy8FRgXfBO2X0AXe0ICUkp7KXWQ&oe=66FB7EA0"
                    ]
                },
                {
                    id: 16,
                    name: "Oversized Skeleton Knit Sweater",
                    price: 15.7,
                    salePrice: 12.3,
                    mainImg: "https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg",
                    images: [
                        "https://i.pinimg.com/736x/92/bf/81/92bf8187481ef3fa36c0fa81dbeb57c0.jpg",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456829614_1038762104012370_8453003655724394731_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=hROL1KNDW-IQ7kNvgGj-FsB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHCfojIPsI-SXuiETFYcrx55vy2c94uUwo31WHDJGz8-g&oe=66FB5DA1",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456905471_950658230198464_9077927501254741544_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6HdrpVl4QjMQ7kNvgHtj0bE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEreJ7vN7vmJfITBWKaeW1m07mh-s4KyUEbbyHuLkw_0w&oe=66FB7FDA",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/457140218_1072685187546866_71938760449007939_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BmxB-fO3g6kQ7kNvgGLsyjR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGUL_3qQv1o6FnMR5BJgDsXSOJE3htk0gqO1LTmp8TuUQ&oe=66FB7EA4"
                    ]
                },
                {
                    id: 17,
                    name: "Special Blue Sweater",
                    price: 17.6,
                    salePrice: 14.8,
                    mainImg: "https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg",
                    
                    images: [
                        "https://i.pinimg.com/736x/6b/17/16/6b17161cdc7b538ed89062f9c36c81f9.jpg",
                        "https://www.muotitrendit.com/catalog/a44543e5199d4412/syksyn-ja-talven-miesten-villapaita-sarjakuva-kirjonta-pyoereae-kaula-kansi-beige-3154fc03.jpg_.webp?fbclid=IwZXh0bgNhZW0CMTEAAR2tKFnC5EvtdNF39ruaXfN9HOhHhkKo_cQnzwu6mTTFgqqt_4dxMbLhcmM_aem_GyJBJnQ2CJWCLvM3RNNj-w",
                        "https://www.muotitrendit.com/catalog/a44543e5199d4412/syksyn-ja-talven-miesten-villapaita-sarjakuva-kirjonta-pyoereae-kaula-kansi-beige-3154fm01.jpg_.webp",
                        "https://www.muotitrendit.com/catalog/a44543e5199d4412/syksyn-ja-talven-miesten-villapaita-sarjakuva-kirjonta-pyoereae-kaula-kansi-beige-3154fm02.jpg_.webp?fbclid=IwZXh0bgNhZW0CMTEAAR2QXh6W3dA07Z_mA3gTaBi1oZXScDIcfi_Zm-ivw2xV3pklj1kQUemr89k_aem_3WStvlJKilQQEmXU8LYEfw"
                    ]
                },
                {
                    id: 18,
                    name: "Magnificent colorful sweater",
                    price: 30.6,
                    salePrice: 24.5,
                    mainImg: "https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg",
                    images: [
                        "https://i.pinimg.com/736x/79/e3/3e/79e33e59ecb2c928f73df3b92bc829f6.jpg",
                        "https://down-vn.img.susercontent.com/file/9ae871485d7f488f65a7308169f565ad",
                        "https://down-vn.img.susercontent.com/file/c935b49d2e93dab8599976230d682ca3",
                        "https://scontent.xx.fbcdn.net/v/t1.15752-9/456919400_386449714488238_2490255822321320495_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cMntqlFEYG0Q7kNvgEs59cZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEPLW8k8DaCw6eDIZoxRmAPs8lEOKqnjz6jraibc1lTaw&oe=66FB965C"
                    ]
                },
                {
                    id: 19,
                    name: "Men's Kristina Ribbed Brami",
                    price: 11.6,
                    salePrice: 7.8,
                    mainImg: "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg",
                    images: [
                        "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg",
                        "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg",
                        "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg",
                        "https://i.pinimg.com/736x/98/b1/63/98b1636d8fc2af22e8a2a60591ff7977.jpg"
                    ]
                },
                {
                    id: 20,
                    name: "Unique Tank Top",
                    price: 14.6,
                    salePrice: 10.1,
                    mainImg: "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg",
                    images: [
                        "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg",
                        "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg",
                        "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg",
                        "https://i.pinimg.com/736x/db/c1/f2/dbc1f2abe98647b4fd0929f18cd2a9ef.jpg"
                    ]
                },
                {
                    id: 21,
                    name: "Popular Tank Top",
                    price: 9.8,
                    salePrice: 5.9,
                    mainImg: "https://i.pinimg.com/736x/c8/93/49/c89349195dc5d82123fd6c7cfe966385.jpg",
                    images: [
                        "https://i.pinimg.com/736x/c8/93/49/c89349195dc5d82123fd6c7cfe966385.jpg",
                        "https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-luyqbtaezg2tec",
                        "https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-luyqbtaepm3p73",
                        "https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-luyqbtaewmxx52"
                    ]
                },
                {
                    id: 22,
                    name: "Our Brand New Tank Top",
                    price: 8.7,
                    salePrice: 4.3,
                    mainImg: "https://i.pinimg.com/736x/64/71/4c/64714c37d5a0588a76667686c381450d.jpg",
                    images: [
                        "https://i.pinimg.com/736x/64/71/4c/64714c37d5a0588a76667686c381450d.jpg",
                        "https://down-vn.img.susercontent.com/file/sg-11134201-22100-su15uyd7z6hv19",
                        "https://down-vn.img.susercontent.com/file/sg-11134201-22100-htrjz2e7z6hv05",
                        "https://down-vn.img.susercontent.com/file/7158fd3beba7cfcba57fe0f586e98417"
                    ]
                },
                {
                    id: 23,
                    name: "BASIQUINHAS",
                    price: 9.2,
                    salePrice: 5.1,
                    mainImg: "https://i.pinimg.com/736x/65/e3/3f/65e33f819e6b60ff3e124a6093b698aa.jpg",
                    images: [
                        "https://i.pinimg.com/736x/65/e3/3f/65e33f819e6b60ff3e124a6093b698aa.jpg",
                        "https://product.hstatic.net/200000041406/product/img_1276_926af41ace47431084038c2a27c1e2e0_master.jpg",
                        "https://product.hstatic.net/200000041406/product/img_1253_4606606202cf439a9a6e28fb8eca171e_master.jpg",
                        "https://product.hstatic.net/200000041406/product/img_1257_0dbd5a99b42d4d4e8ff17733c083ba41_master.jpg"
                    ]
                },
                {
                    id: 24,
                    name: "Body Duda",
                    price: 7.4,
                    salePrice: 4.9,
                    mainImg: "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg",
                    images: [
                        "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg",
                        "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg",
                        "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg",
                        "https://i.pinimg.com/736x/d1/2d/51/d12d51b4af060da7ad673d225e028db7.jpg"
                    ]
                },
                {
                    id: 25,
                    name: "Fleece-Lined Teddy",
                    price: 20.0,
                    salePrice: 11.5,
                    mainImg: "https://i.pinimg.com/564x/17/a3/d6/17a3d6685156d9df94f6126035d5713e.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0zb0bJNh-ofBEkXJomJtvfD-zYvZ9MptIcUe6tWME48012xpf7enE0VEY_aem_6252b1iORroFQFaEmRQvTg",
                    images: [
                        "https://i.pinimg.com/564x/17/a3/d6/17a3d6685156d9df94f6126035d5713e.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR0zb0bJNh-ofBEkXJomJtvfD-zYvZ9MptIcUe6tWME48012xpf7enE0VEY_aem_6252b1iORroFQFaEmRQvTg",
                        "https://img.ltwebstatic.com/images3_spmp/2023/12/30/28/1703913801a1dee6ce9fe9043d5699e7442168efe0_thumbnail_720x.webp?fbclid=IwZXh0bgNhZW0CMTEAAR0ENCX20VW6gVNDn69Bcaoo4UB11Fd4asjfNfQdbU32YUg9NvOtdEBoCxc_aem_HldkctHKK_9YasyCby7V0Q",
                        "https://img.ltwebstatic.com/images3_spmp/2023/12/30/28/1703913801b1cfc7a300b818c4f83a087c811878c6_thumbnail_720x.webp?fbclid=IwZXh0bgNhZW0CMTEAAR0BxiU4rUyV8tXesCO4GdGdwLPRLtyk1Y24g5MmBMctNhi7nz7qd1lSE1U_aem_OiXdUgQXV_nhnYfbPx-EUQ",
                        "https://img.ltwebstatic.com/images3_spmp/2023/12/30/28/1703913801185c1216e7285dbb15103b72638914b9_thumbnail_720x.webp?fbclid=IwZXh0bgNhZW0CMTEAAR3ii7fu6sLLEwmNorNXGcAilVHfkOKT855XDgxn4L3L51wYhQtLNUvGeFw_aem_hlFygTYcBlrbbPVJF81e_Q"
                    ]
                },
                {
                    id: 26,
                    name: "Unisex Windbreaker Jacket",
                    price: 25.0,
                    salePrice: 20.0,
                    mainImg: "https://i.pinimg.com/564x/90/a0/68/90a0680234773627bde728fe3c269852.jpg",
                    images: [
                        "https://i.pinimg.com/564x/90/a0/68/90a0680234773627bde728fe3c269852.jpg",
                        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lniq7v5tgosa59",
                        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfcxwhplrp1g9b",
                        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfcxwhplt3lw2d"
                    ]
                },
                {
                    id: 27,
                    name: "Long-Sleeve Striped Shirt",
                    price: 15.0,
                    salePrice: 12.0,
                    mainImg: "https://i.pinimg.com/564x/be/31/b4/be31b4eeaf0aa9a55c8e96d9f0cf1f6d.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3UacouJrnXTgqR_pMYP3A4fb_WrHdXLeQwJRsKdZSpY3sxSOOeojcBv3Y_aem_-WGdSNpSmvgRghR6xkSJYQ",
                    images: [
                        "https://i.pinimg.com/564x/be/31/b4/be31b4eeaf0aa9a55c8e96d9f0cf1f6d.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3UacouJrnXTgqR_pMYP3A4fb_WrHdXLeQwJRsKdZSpY3sxSOOeojcBv3Y_aem_-WGdSNpSmvgRghR6xkSJYQ",
                        "https://down-vn.img.susercontent.com/file/b07784bf944c9aee639dc8410890a316",
                        "https://down-vn.img.susercontent.com/file/b4c332907d578833d5a5d5bdd111efce",
                        "https://down-vn.img.susercontent.com/file/75d9e6aefeb091208e55c5f36a4875f0"
                    ]
                },
                {
                    id: 28,
                    name: "Charmkpr Men Tops 2023",
                    price: 30.0,
                    salePrice: 25.0,
                    mainImg: "https://i.pinimg.com/564x/54/84/64/54846432b91b0814bd1720f1088d162c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3gPHad05w9ntwuY1THNrNRSiLA61sHvLQIBXJCBOOdDsVH6MkQRdMZ-XU_aem_dwXXze-IobDYkFsVDbrvag",
                    images: [
                        "https://i.pinimg.com/564x/54/84/64/54846432b91b0814bd1720f1088d162c.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3gPHad05w9ntwuY1THNrNRSiLA61sHvLQIBXJCBOOdDsVH6MkQRdMZ-XU_aem_dwXXze-IobDYkFsVDbrvag",
                        "https://ae-pic-a1.aliexpress-media.com/kf/Sec49feb80adc4d76adc5d19a2495cbf0k/Charmkpr-Men-Tops-2023-Fashion-Corduroy-Color-Pattern-Blouse-Casual-Streetwear-Male-Hot-Sale-Stitching-Long.jpg_.webp",
                        "https://ae-pic-a1.aliexpress-media.com/kf/S590e7d7d9a01487e9269e91f9a5bbf4dN/Charmkpr-Men-Tops-2023-Fashion-Corduroy-Color-Pattern-Blouse-Casual-Streetwear-Male-Hot-Sale-Stitching-Long.jpg_.webp",
                        "https://ae-pic-a1.aliexpress-media.com/kf/S376a32c072e54bd08e3e01fc3116d4b7c.jpg_120x120.jpg_.webp"
                    ]
                },
                {
                    id: 29,
                    name: "Sweater Cool",
                    price: 40.0,
                    salePrice: 35.0,
                    mainImg: "https://i.pinimg.com/564x/eb/b5/4e/ebb54e6fbc2ff1012e022ddbb0c30d29.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR34NLDyyh58_yA6LfY6bTW07twt65opbQnFERm76JFQXNRzwZ7owW1KvCE_aem_Mu7sQ3WTue94HZY5uAvDXg",
                    images: [
                        "https://i.pinimg.com/564x/eb/b5/4e/ebb54e6fbc2ff1012e022ddbb0c30d29.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR34NLDyyh58_yA6LfY6bTW07twt65opbQnFERm76JFQXNRzwZ7owW1KvCE_aem_Mu7sQ3WTue94HZY5uAvDXg",
                        "https://i.pinimg.com/736x/7a/8d/76/7a8d76d3b37b6d8d04f62d6b229b8f7b.jpg",
                        "https://i.pinimg.com/736x/7a/8d/76/7a8d76d3b37b6d8d04f62d6b229b8f7b.jpg",
                        "https://i.pinimg.com/736x/7a/8d/76/7a8d76d3b37b6d8d04f62d6b229b8f7b.jpg"
                    ]
                },
                {
                    id: 30,
                    name: "Shorts Summer",
                    price: 18.0,
                    salePrice: 15.0,
                    mainImg: "https://i.pinimg.com/564x/6e/87/b3/6e87b3498074e90123c35f5ed744e55b.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3nOERhF_BUm9JhBmUNixSfXGd3X1sQ1JBTPCmEHX_4P8Ht0tMWCbCVf9Q_aem_0H0zQC0uczW8tuwOHNKI7A",
                    images: [
                        "https://i.pinimg.com/564x/6e/87/b3/6e87b3498074e90123c35f5ed744e55b.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR3nOERhF_BUm9JhBmUNixSfXGd3X1sQ1JBTPCmEHX_4P8Ht0tMWCbCVf9Q_aem_0H0zQC0uczW8tuwOHNKI7A",
                        "https://down-vn.img.susercontent.com/file/9af4636c9ec88e669c590538856fc520",
                        "https://down-vn.img.susercontent.com/file/c76b0c782774b50b2144f8851830c93c",
                        "https://down-vn.img.susercontent.com/file/eff1aba407627d1e9e0c17dcae8d452a"
                    ]
                }
                
        ];

        const selectedProduct = products.find(p => p.id === parseInt(id));
        setProduct(selectedProduct);
        if (selectedProduct) {
            setSelectedImage(selectedProduct.images[0]);
            }
        }, [id]);

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        if (selectedSize) {
            const cartItem = {
                ...product,
                selectedSize, 
                quantity
            };
            addToCart(cartItem);
        } else {
            alert('Please select a size.');
        }
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="Detail">
            <div className="Back">
                <Link id="back" to="/products">{'<'} BACK TO PRODUCTS</Link>
            </div>
            <div className="Clothes-Description">
                <div className="Clothes">
                    <div className="left-side">
                        {product.images.map((img, index) => (
                            <div
                                key={index}
                                className={`side${index + 1}`}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img} alt={`Thumbnail ${index + 1}`} className={`dt-img${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="right-side">
                        {selectedImage && (
                            <div className="des1">
                                <img src={selectedImage} alt="" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="Description">
                    <h1>{product.name}</h1>
                    <span id="ds-price">${product.price.toFixed(2)}</span>
                    <span id="ds2-price">${product.salePrice.toFixed(2)}</span>
                    <div className="Select">
                        <div className="size-title">
                            <h2>Select size</h2>
                        </div>
                        <div className="size">
                            <button onClick={() => setSelectedSize('S')} style={{ backgroundColor: selectedSize === 'S' ? 'lightgray' : '' }}>S</button>
                            <button onClick={() => setSelectedSize('M')} style={{ backgroundColor: selectedSize === 'M' ? 'lightgray' : '' }}>M</button>
                            <button onClick={() => setSelectedSize('L')} style={{ backgroundColor: selectedSize === 'L' ? 'lightgray' : '' }}>L</button>
                            <button onClick={() => setSelectedSize('XL')} style={{ backgroundColor: selectedSize === 'XL' ? 'lightgray' : '' }}>XL</button>
                        </div>
                        
                        <div className="amount">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <div className="amount-product">
                                <label>{quantity}</label>
                            </div>
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <div className="add-to-cart">
                            <button className="pushable"  onClick={() => handleAddToCart(product)} >
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front">
                                ADD TO CART
                            </span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="More-Detail">
                <div className="m-detail-title">
                    <h1>Details</h1>
                </div>
                <div className="paragraph-detail">
                    <p>
                        It is a long established fact that a reader will be distracted by<br />
                        the readable content of a page when looking at its layout. The<br />
                        point of using Lorem Ipsum is that it has a more-or-less<br />
                        normal distribution of letters, as opposed to using 'Content<br /> here, content here
                    </p>
                </div>
                <div className="ul-detail">
                    <ul>
                        <li>Form: modern</li>
                        <li>Material: 100% Cotton</li>
                        <li>Color: White</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Detail;