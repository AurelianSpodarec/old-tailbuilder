
// import { pages } from "./../../../database/pages.json";

const htmlPanels = [
    {
        "id": 10,
        "parent_id": 50,
        "components":[
            {
                "id": 1,
                "thumbnail": "http://designm.ag/wp-content/uploads/2015/04/00-featured-github-enterprise-header.jpg",
                "html": `<section>bfvhfgbhfghgfbh</section>`
            },
            {
                "id": 2,
                "thumbnail": "https://assets.materialup.com/uploads/43763626-d320-4e05-84ba-e59ef8d216a4/preview.png",
                "html": `<section>errrrrrrrererereeerre</section>`
            },
            {
                "id": 3,
                "thumbnail": "https://whatpixel.com/images/glossary/hero-images/003-leankit-hero-image-photo.jpg",
                "html": `<section>aaaaaaaaaaaaa</section>`
            },
            {
                "id": 4,
                "thumbnail": "https://miro.medium.com/max/1838/0*IJp-trU9lCRdmuZ2.jpg",
                "html": `<section>WOOOOOF</section>`
            },
            {
                "id": 5,
                "thumbnail": "https://www.bittbox.com/wp-content/uploads/2017/06/03-cheesecake-labs-homepage-hero.jpg",
                "html": `<section>hhhhhhhhhhhhhh</section>`
            },
            {
                "id": 6,
                "thumbnail": "https://i.pinimg.com/originals/84/24/eb/8424ebf29b168881838054842f6bf8b8.png",
                "html": `<section>mmmmmmmmmmmmmmmm</section>`
            }
        ]
    },
    {
        "id": 25,
        "parent_id": 23,
        "components":[
            {
                "id": 1,
                "thumbnail": "https://www.bittbox.com/wp-content/uploads/2017/06/03-cheesecake-labs-homepage-hero.jpg",
                "html": `<section>===================</section>`
            },
            {
                "id": 2,
                "thumbnail": "https://miro.medium.com/max/1838/0*IJp-trU9lCRdmuZ2.jpg",
                "html": `<section>0000000000</section>`
            },
            {
                "id": 3,
                "thumbnail": "https://assets.materialup.com/uploads/43763626-d320-4e05-84ba-e59ef8d216a4/preview.png",
                "html": `<section>99999999999</section>`
            },
            {
                "id": 4,
                "thumbnail": "https://whatpixel.com/images/glossary/hero-images/003-leankit-hero-image-photo.jpg",
                "html": `<section>8888888888888</section>`
            }
        ]
    },
    {
        "id": 50,
        "parent_id": 24,
        "components":[
            {
                "id": 1,
                "thumbnail": "https://whatpixel.com/images/glossary/hero-images/003-leankit-hero-image-photo.jpg",
                "html": `<section>777777777777</section>`
            },
            {
                "id": 2,
                "thumbnail": "https://www.bittbox.com/wp-content/uploads/2017/06/03-cheesecake-labs-homepage-hero.jpg",
                "html": `<section>666666666666</section>`
            },
            {
                "id": 3,
                "thumbnail": "https://miro.medium.com/max/1838/0*IJp-trU9lCRdmuZ2.jpg",
                "html": `<section>5555555555555555555</section>`
            },
            {
                "id": 4,
                "thumbnail": "https://assets.materialup.com/uploads/43763626-d320-4e05-84ba-e59ef8d216a4/preview.png",
                "html": `<section>44444444444444</section>`
            }
        ]
    },
    {
        "id": 100,
        "parent_id": 25,
        "components":[
            {
                "id": 1,
                "thumbnail": "https://miro.medium.com/max/1838/0*IJp-trU9lCRdmuZ2.jpg",
                "html": `<section>111111111111111111111</section>`
            },
            {
                "id": 2,
                "thumbnail": "https://assets.materialup.com/uploads/43763626-d320-4e05-84ba-e59ef8d216a4/preview.png",
                "html": `<section>2222222222222222</section>`
            },
            {
                "id": 3,
                "thumbnail": "https://www.bittbox.com/wp-content/uploads/2017/06/03-cheesecake-labs-homepage-hero.jpg",
                "html": `<section>333333333333</section>`
            }
        ]
    }
]



const getSections = () => {
    const res = {
        "status": 200,
        "data": {
            "sections": [
                {
                    "id": 50,
                    "category": "navigation",
                    "name": "Header",
                },
                {
                    "id": 60,
                    "category": "navigation",
                    "name": "Footer",
                },
                {
                    "id": 70,
                    "category": "navigation",
                    "name": "Sidebar",
                },
                {
                    "id": 23,
                    "category": "section",
                    "name": "Hero",
                },
                {
                    "id": 24,
                    "category": "section",
                    "name": "Pricing",
                },
                {
                    "id": 25,
                    "category": "section",
                    "name": "CTA",
                }
            ]
        }
    }
    return res;
}

function getSectionComponentsByID(sectionID: number) {
    const section = htmlPanels.filter(item => item.parent_id === sectionID)
   
    
    const res = {
        "status": 200,
        "data": {
            "sections": section
        }
    }
    return res
}

export {
    getSections,
    getSectionComponentsByID
}