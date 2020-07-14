import Shop from '../models/shop';
import Cuisine from '../models/cuisine';

export const SHOPS = [
    new Shop('c1', 'Subway', 'Open', '5', 'https://cdn.britannica.com/08/193908-050-66767D57/view-Subway-restaurant-Bangkok-Thailand.jpg'),
    new Shop('c2', 'Chai Kingz', 'Open', '4.7','https://www.infodea.in/wp-content/uploads/2020/01/chai-king.jpg'),
    new Shop('c3', 'Burger King', 'Close', '4.5','http://vffranchiseconsulting.com/wp-content/uploads/2018/07/f.jpg'),
    new Shop('c4', 'Dominos', 'Open', '4.3','https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/dominos_pizza_branch_3.jpg?itok=062-rE8J'),
    new Shop('c5', 'McDonalds', 'Closed', '4.4','https://www.worldofbuzz.com/wp-content/uploads/2016/12/mcdonalds-sells-malaysian-singapore-franchise-to-saudi-group-world-of-buzz-4.png'),
    new Shop('c6', 'Idli and Dosa', 'Open', '3.9','https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/02/Pictures/india-people-food-lifestyle-crime_3d6fde36-b507-11e9-bb84-86ad41188646.jpg'),
    new Shop('c7', 'MlkShakes', 'Open', '4.1','https://content.jdmagicbox.com/comp/chennai/u6/044pxx44.xx44.180124190232.l8u6/catalogue/mistletoe-ramapuram-chennai-milkshake-shops-1bddxpdv6m.jpg'),
    new Shop('c8', 'Biriyani Kadai', 'Closed', '5','https://wirally.com/wp-content/uploads/2019/04/3-Restaurant.jpg'),
    new Shop('c9', 'Pizza Hut', 'Open', '4.5','https://www.cityshor.com/uploads/article/04_2015/1428485124_Pizza_Hut.jpg'),
    new Shop('c0', 'Frankie Wraps', 'Open', '3.8','https://franchisekaro.in/wp-content/uploads/2019/09/176_pic-1024x828.jpg'),
];

export const CUISINES = [
    new Cuisine('i1','North Indian', 'http://www.foodofy.com/wp-content/uploads/2015/07/11015_14_site_clear.jpeg'),
    new Cuisine('i2','South Indian', 'https://www.colive.in/blog/wp-content/uploads/2018/04/qsq.jpg'),
    new Cuisine('i3','Chinese', 'https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg'),
    new Cuisine('i4','Italian', 'https://i.ndtvimg.com/i/2015-12/italian_625x350_41450863014.jpg'),
    new Cuisine('i5','Beverage', 'https://www.ndtv.com/cooks/images/irish.coffee.625_625x350_41454364039.jpg'),
    new Cuisine('i6','Chats', 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2017/02/aloo-chana-chaat-recipes-2.jpg'),
    new Cuisine('i7','Healthy', 'https://www.errenskitchen.com/wp-content/uploads/2018/05/tomato-avacdo-salad.jpg'),
    new Cuisine('i8','Snacks', 'https://i.ytimg.com/vi/W2ktZJe1q1s/maxresdefault.jpg'),
];

