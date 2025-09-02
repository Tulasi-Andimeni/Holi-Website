import Body from './body';

const Parent = () => {
    const cardData = [
        {
            img: './redballon.png',
            name: 'Red Ballon',
            color: 'Red',
            cost: `100/-`,
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './orangeballon.png',
            name: 'Orange Ballon',
            color: 'Orange',
            cost:  `150/-`,
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './purpleballon.png',
            name: 'Purple Ballon',
            color: 'Purple',
            cost:  "140/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './pinkbalon.png',
            name: 'Pink Ballon',
            color: 'Pink',
            cost:  "130/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './watergun.png',
            name: 'Water Guns',
            color: 'All Colors',
            cost:  "400/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './greenballon.png',
            name: 'Green Ballon',
            color: 'Green',
            cost:  "130/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './ballon.png',
            name: ' Ballon',
            color: 'All Colors',
            cost:  "300/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './waterballons.png',
            name: ' Ballon',
            color: 'Multi Colors',
            cost:  "400/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './guns.png',
            name: 'Water Guns',
            color: 'Multi Colors',
            cost:  "500/-",
            link: `⭐⭐⭐⭐⭐`
        }

        ]
    
    const colorData = [
        {
            img: './redcolor.png',
            name: 'Red Powder',
            color: 'Red',
            cost: `100/-`,
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './blueclr.png',
            name: 'Blue Powder',
            color: 'Blue',
           cost:  `150`,
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './greenclr.png',
            name: 'Green Powder',
            color: 'Green',
            cost:  "120/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './orangeclr.png',
            name: 'Orange Powder',
            color: 'Orange',
            cost:  "140/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './pinkclr.png',
            name: 'Pink Powder',
            color: 'Pink',
            cost:  "140/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './purplecle.png',
            name: 'Purple Powder',
            color: 'Purple',
            cost:  "140/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './yellowcolor.png',
            name: 'Yellow Powder',
            color: 'Yellow',
            cost:  "100/-",
            link: `⭐⭐⭐⭐⭐`
        },
        {
            img: './allclr.png',
            name: 'All Powder',
            color: 'Multi Colors',
            cost:  "400/-",
            link: `⭐⭐⭐⭐⭐`
        }
        ]    
    return (
        <>
            <Body data= {cardData} color={colorData}/>
        </>
    )
}
export default Parent;