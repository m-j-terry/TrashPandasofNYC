import { useState, useEffect } from 'react'
import one from '../../public/img/insta/one.jpeg';
import two from '../../public/img/insta/two.jpeg';
import three from '../../public/img/insta/three.jpeg';
import four from '../../public/img/insta/four.jpeg';
import five from '../../public/img/insta/five.jpeg';
import six from '../../public/img/insta/six.jpeg';
import seven from '../../public/img/insta/seven.jpeg';
import eight from '../../public/img/insta/eight.jpeg';
import nine from '../../public/img/insta/nine.jpeg';
import ten from '../../public/img/insta/ten.jpeg';
import eleven from '../../public/img/insta/eleven.jpeg';
import twelve from '../../public/img/insta/twelve.jpeg';
import thirteen from '../../public/img/insta/thirteen.jpeg';
import fourteen from '../../public/img/insta/fourteen.jpeg';
import fifteen from '../../public/img/insta/fifteen.jpeg';
import sixteen from '../../public/img/insta/sixteen.jpeg';
import seventeen from '../../public/img/insta/seventeen.jpeg';
import eighteen from '../../public/img/insta/eighteen.jpeg';
import nineteen from '../../public/img/insta/nineteen.jpeg';
import twenty from '../../public/img/insta/twenty.jpeg';
import twentyOne from '../../public/img/insta/twentyOne.jpeg';
import twentyTwo from '../../public/img/insta/twentyTwo.jpeg';
import twentyThree from '../../public/img/insta/twentyThree.jpeg';
import twentyFour from '../../public/img/insta/twentyFour.jpeg';
import twentyFive from '../../public/img/insta/twentyFive.jpeg';
import twentySix from '../../public/img/insta/twentySix.jpeg';
import twentySeven from '../../public/img/insta/twentySeven.jpeg';
import twentyEight from '../../public/img/insta/twentyEight.jpeg';
import twentyNine from '../../public/img/insta/twentyNine.jpeg';
import thirty from '../../public/img/insta/thirty.jpeg';
import thirtyOne from '../../public/img/insta/thirtyOne.jpeg';
import thirtyTwo from '../../public/img/insta/thirtyTwo.jpeg';
import thirtyThree from '../../public/img/insta/thirtyThree.jpeg';
import thirtyFour from '../../public/img/insta/thirtyFour.jpeg';
import thirtyFive from '../../public/img/insta/thirtyFive.jpeg';
import thirtySix from '../../public/img/insta/thirtySix.jpeg';
import thirtySeven from '../../public/img/insta/thirtySeven.jpeg';
import thirtyEight from '../../public/img/insta/thirtyEight.jpeg';
import thirtyNine from '../../public/img/insta/thirtyNine.jpeg';

export default function Instagram(){
    const [images, setImages] = useState([])
    const urls = ['https://www.instagram.com/p/CdraSwuM-Lw/?hl=en', 'https://www.instagram.com/p/CdEat-SOLhI/?hl=en', 'https://www.instagram.com/p/CcbCDuLO2Iv/?hl=en&img_index=1', 'https://www.instagram.com/p/Ccf4YKLuCcT/?hl=en&img_index=1', 'https://www.instagram.com/p/CcYNFdLuGlU/?hl=en&img_index=1', 'https://www.instagram.com/p/CcYGG8rugUy/?hl=en', 'https://www.instagram.com/p/CcOkWYhuksB/?hl=en', 'https://www.instagram.com/p/CcMO8-2Mald/?hl=en&img_index=1', 'https://www.instagram.com/p/Cbg1WBxOzp2/?hl=en&img_index=1', 'https://www.instagram.com/p/Ca4myAdu0f0/?hl=en&img_index=1', 'https://www.instagram.com/p/CXbdN57lNY6/?hl=en&img_index=1', 'https://www.instagram.com/p/CWUEC3glV3H/?hl=en', 'https://www.instagram.com/p/CWHFGWkF0HF/?hl=en', 'https://www.instagram.com/p/CV3qJykl5Kt/?hl=en&img_index=1', 'https://www.instagram.com/p/CV2h006r22m/?hl=en&img_index=2', 'https://www.instagram.com/p/CVa60ruFzup/?hl=en&img_index=1', 'https://www.instagram.com/p/CVWYueoMf0i/?hl=en&img_index=2', 'https://www.instagram.com/p/CVRCTiaFWkR/?hl=en&img_index=3', 'https://www.instagram.com/p/CTU070ZLGQt/?hl=en&img_index=3', 'https://www.instagram.com/p/CS8EbgLjmM4/?hl=en', 'https://www.instagram.com/p/CSx8G_fDxlQ/?hl=en&img_index=3', 'https://www.instagram.com/p/CSnq5dhjVtk/?hl=en&img_index=6', 'https://www.instagram.com/p/CSfKuMKFZX0/?hl=en&img_index=1', 'https://www.instagram.com/p/COk1X__jpvY/?hl=en&img_index=1', 'https://www.instagram.com/p/COBvCUSjXNb/?hl=en&img_index=1', 'https://www.instagram.com/p/CN7_IxmjlMN/?hl=en&img_index=2', 'https://www.instagram.com/p/CN7-23Hj85F/?hl=en', 'https://www.instagram.com/p/CNsYE14jlN1/?hl=en', 'https://www.instagram.com/p/CMMqe9RFg0M/?hl=en&img_index=2', 'https://www.instagram.com/p/CLvZysWl-b4/?hl=en&img_index=2', 'https://www.instagram.com/p/CLaz5LRlDpJ/?hl=en&img_index=2', 'https://www.instagram.com/p/CKU-_WYFG1O/?hl=en', ' https://www.instagram.com/p/CJr-RSllr63/?hl=en&img_index=3', 'https://www.instagram.com/p/CIzfrRiFPPo/?hl=en', 'https://www.instagram.com/p/CIciNN_l1Tm/?hl=en&img_index=3', 'https://www.instagram.com/p/CFs6782FtKY/?hl=en&img_index=3', 'https://www.instagram.com/p/CD1_oUhl85L/?hl=en&img_index=1', 'https://www.instagram.com/p/CC4aCUklHfg/?hl=en&img_index=1', 'https://www.instagram.com/p/B9uX97GlziD/?hl=en&img_index=1', ]
    useEffect(() => {
        const posts = [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
            fourteen,
            fifteen,
            sixteen,
            seventeen,
            eighteen,
            nineteen,
            twenty,
            twentyOne,
            twentyTwo,
            twentyThree,
            twentyFour,
            twentyFive,
            twentySix,
            twentySeven,
            twentyEight,
            twentyNine,
            thirty,
            thirtyOne,
            thirtyTwo,
            thirtyThree,
            thirtyFour,
            thirtyFive,
            thirtySix,
            thirtySeven,
            thirtyEight,
            thirtyNine
        ];
        setImages(posts)
    }, [])

    useEffect(() => {
        console.log(images.length)
        console.log(urls.length)
    }, [images])
    
    return(
        <div className="Instagram">
            {images.map((img, index) => {
                return (
                    <div className="img" key={index}>
                        <a href={urls[index]}><img src={img} alt={`Image ${index}`} /></a>
                    </div>
                );
            })}
        </div>
    )
}