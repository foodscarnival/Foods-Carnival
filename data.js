// ============================================================
//  FOODS CARNIVAL — Menu & Deals Data
// ============================================================

const MENU_ITEMS = [

  // ── BURGERS ──────────────────────────────────────────────
  { id:1,  cat:'burgers', name:'Zinger Burger',         price:299, desc:'Crispy fried chicken patty with special sauce',      img:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Qwxo-poZCz12k2ck5ZE3xg.jpeg'   },
  { id:2,  cat:'burgers', name:'Zinger Cheese Burger',  price:349, desc:'Zinger patty topped with melted cheese & veggies',   img:'https://rasheedqorma.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1761740582-Zinger-Chees-Burger%20(1).png&w=640&q=75', badge:''           },
  { id:3,  cat:'burgers', name:'Chicken Paty Burger',   price:279, desc:'Juicy grilled chicken patty in a soft bun',          img:'https://thewholecook.com/wp-content/uploads/2023/07/The-Best-Ground-Chicken-Burgers-1-5.jpg', badge:''           },
  { id:4,  cat:'burgers', name:'Double Deker Burger',   price:449, desc:'Double stacked loaded burger',                       img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=85'    },
  { id:5,  cat:'burgers', name:'Jalapeno Burger',       price:399, desc:'Fiery jalapeno burger with house hot sauce',         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybbLHBEv7AuYYWkJ1Bw4Q04JyQq4yj7Hv1063AqCk_yDO2nP3kU9iJBp1lwI&s', badge:'Spicy'      },
  { id:6,  cat:'burgers', name:'Maxican Burger',        price:399, desc:'Mexican style burger with bold spices',              img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxyfNWpCEdeQPoIqyNgXD1-7b1mWS_YQIcPvNEhBG5fBfSZFl_2aAH_FN3g&s', badge:''           },
  { id:7,  cat:'burgers', name:'Lava Zinger Burger',    price:449, desc:'Zinger with signature lava hot sauce',               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcBdnePxcfUPnbEPeU6RaBf-bKBMkDPFVmZXamjoCKuK73EnFqqIUYXaaHw&s', badge:'Hot'        },
  { id:8,  cat:'burgers', name:'Pizza Burger',          price:449, desc:'Burger stacked with pizza style toppings',           img:'https://dailyeasymeals.com/wp-content/uploads/2025/08/old-school-pizza-burgers-featured-image.webp', badge:'Fusion'     },
  { id:9,  cat:'burgers', name:'Chicken Burger',        price:249, desc:'Classic chicken burger with fresh garden veggies',   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUK75bjEBcAfHEsIgG6zVmEwhrZ6A3jc02lTwgoFL9RC4DbIoDIC_mh5-maXE&s', badge:''           },
  { id:10, cat:'burgers', name:'Chicken Cheese Burger', price:299, desc:'Chicken patty with cheese slice & house sauce',      img:'https://editor.danishcrown.com/media/oc0j5shw/crispy-chicken-cheeseburger_1920x1080px.jpg?width=1344&height=840&v=1dbd52b53c4ad70&rmode=contain&format=webp&quality=75&autoorient=true', badge:''           },
  { id:12, cat:'burgers', name:'Lapeta Egg Burger',     price:179, desc:'Egg Lapeta burger   best value',                     img:'https://scontent.fisb18-1.fna.fbcdn.net/v/t1.6435-9/103095776_274682260609892_1434420202022718922_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7Rn2bqnSbrEQ7kNvwEp7GLd&_nc_oc=Adr0Px7Y36uKZcSLULS1tqm4xbyOcoSeO_IdBNyJB1coVwF9frBKHTSGpNGL11Gx_vY&_nc_zt=23&_nc_ht=scontent.fisb18-1.fna&_nc_gid=mLOY5wwTA0MY1ji8UkeSDQ&_nc_ss=7f289&oh=00_Af1-Obi8HSjJEnJKT2u-qXOmOafbef4GyGjpyXDcwg68Hg&oe=6A16B8FC', badge:'Value'      },

  // ── PIZZA ─────────────────────────────────────────────────
  { id:13, cat:'pizza', name:'BBQ Pizza (Small)',             price:399, desc:'Classic BBQ chicken pizza',                     img:'https://thevirtualcaterer.com/wp-content/uploads/2024/05/BBQ-Chicken-Pizza-3.jpg', badge:'Regular Pizza'   },
  { id:14, cat:'pizza', name:'BBQ Pizza (medium)',            price:699, desc:'Classic BBQ chicken pizza',                     img:'https://thevirtualcaterer.com/wp-content/uploads/2024/05/BBQ-Chicken-Pizza-3.jpg', badge:'Regular Pizza'   },
  { id:15, cat:'pizza', name:'BBQ Pizza (large)',             price:999, desc:'Classic BBQ chicken pizza',                     img:'https://thevirtualcaterer.com/wp-content/uploads/2024/05/BBQ-Chicken-Pizza-3.jpg', badge:'Regular Pizza'   },

  { id:16, cat:'pizza', name:'Tikka Pizza (Small)',           price:399, desc:'Spicy tikka masala pizza',                      img:'https://onestophalal.com/cdn/shop/articles/tikka_masala_pizza-1694014914105_1200x.jpg?v=1694568363', badge:'Regular Pizza'     },
  { id:17, cat:'pizza', name:'Tikka Pizza (medium)',          price:699, desc:'Spicy tikka masala pizza',                      img:'https://onestophalal.com/cdn/shop/articles/tikka_masala_pizza-1694014914105_1200x.jpg?v=1694568363', badge:'Regular Pizza'     },
  { id:18, cat:'pizza', name:'Tikka Pizza (large)',           price:999, desc:'Spicy tikka masala pizza',                      img:'https://onestophalal.com/cdn/shop/articles/tikka_masala_pizza-1694014914105_1200x.jpg?v=1694568363', badge:'Regular Pizza'     },

  { id:19, cat:'pizza', name:'Fajita Pizza (Small)',          price:399, desc:'Mexican fajita-style pizza',                    img:'https://greenvalley.pk/cdn/shop/files/pizza-chicken-fajita_9f9b8488-4732-4396-ac52-b3699a87651e.webp?v=1739451209', badge:'Regular Pizza'          },
  { id:20, cat:'pizza', name:'Fajita Pizza (medium)',         price:699, desc:'Mexican fajita-style pizza',                    img:'https://greenvalley.pk/cdn/shop/files/pizza-chicken-fajita_9f9b8488-4732-4396-ac52-b3699a87651e.webp?v=1739451209', badge:'Regular Pizza'          },
  { id:21, cat:'pizza', name:'Fajita Pizza (large)',          price:999, desc:'Mexican fajita-style pizza',                    img:'https://greenvalley.pk/cdn/shop/files/pizza-chicken-fajita_9f9b8488-4732-4396-ac52-b3699a87651e.webp?v=1739451209', badge:'Regular Pizza'          },

  { id:22, cat:'pizza', name:'Foods Carnival Pizza (Small)', price:449, desc:'Our signature loaded special pizza',             img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=85', badge:'Signature' },
  { id:23, cat:'pizza', name:'Foods Carnival Pizza (medium)',price:799, desc:'Our signature loaded special pizza',             img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=85', badge:'Signature' },
  { id:24, cat:'pizza', name:'Foods Carnival Pizza (large)', price:1199, desc:'Our signature loaded special pizza',            img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=85', badge:'Signature' },

  
  { id:25, cat:'pizza', name:'Dount Pizza (Small)',           price:449, desc:'Donut crust loaded pizza',                      img:'https://eat.de/wp-content/uploads/2024/06/pizzadonuts-0702-2-1170x780.jpg.webp', badge:''          },
  { id:26, cat:'pizza', name:'Dount Pizza (medium)',          price:799, desc:'Donut crust loaded pizza',                      img:'https://eat.de/wp-content/uploads/2024/06/pizzadonuts-0702-2-1170x780.jpg.webp', badge:''          },
  { id:27, cat:'pizza', name:'Dount Pizza (large)',           price:1199, desc:'Donut crust loaded pizza',                     img:'https://eat.de/wp-content/uploads/2024/06/pizzadonuts-0702-2-1170x780.jpg.webp', badge:''          },

  { id:28, cat:'pizza', name:'Milai Boti Pizza (Small)',      price:449, desc:'Tender boti topping on a loaded pizza',         img:'https://pizza360.businesswala.pk/assets/uploads/605a1dfffef3f0de232b66bc8943cda1.png', badge:''          },
  { id:29, cat:'pizza', name:'Milai Boti Pizza (medium)',     price:799, desc:'Tender boti topping on a loaded pizza',         img:'https://pizza360.businesswala.pk/assets/uploads/605a1dfffef3f0de232b66bc8943cda1.png', badge:''          },
  { id:30, cat:'pizza', name:'Milai Boti Pizza (large)',      price:1199, desc:'Tender boti topping on a loaded pizza',        img:'https://pizza360.businesswala.pk/assets/uploads/605a1dfffef3f0de232b66bc8943cda1.png', badge:''          },

  { id:31, cat:'pizza', name:'Crown Crush Pizza (Small)',     price:449, desc:'Crowncrust pizza fully loaded',                img:'https://www.mrcod.pk/wp-content/uploads/2023/03/Crown-Crust-Pizza-1.webp', badge:''          },
  { id:32, cat:'pizza', name:'Crown Crush Pizza (medium)',    price:799, desc:'Crowncrust pizza fully loaded',                img:'https://www.mrcod.pk/wp-content/uploads/2023/03/Crown-Crust-Pizza-1.webp', badge:''          },
  { id:33, cat:'pizza', name:'Crown Crush Pizza (large)',     price:1199, desc:'Crowncrust pizza fully loaded',               img:'https://www.mrcod.pk/wp-content/uploads/2023/03/Crown-Crust-Pizza-1.webp', badge:''          },

  { id:34, cat:'pizza', name:'Kababish Pizza (Small)',        price:449, desc:'Kababis spiced pizza',                         img:'https://eatfresh.businesswala.pk/assets/uploads/1460_b13ba76b1fd1870c86303e15dae85d23.png', badge:''          },
  { id:35, cat:'pizza', name:'Kababish Pizza (medium)',       price:799, desc:'Kababis spiced pizza',                         img:'https://eatfresh.businesswala.pk/assets/uploads/1460_b13ba76b1fd1870c86303e15dae85d23.png', badge:''          },
  { id:36, cat:'pizza', name:'Kababish Pizza (large)',        price:1199, desc:'Kababis spiced pizza',                        img:'https://eatfresh.businesswala.pk/assets/uploads/1460_b13ba76b1fd1870c86303e15dae85d23.png', badge:''          },

  { id:37, cat:'pizza', name:'Pepperoni Pizza (Small)',       price:449, desc:'Classic pepperoni with extra cheese',           img:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=85', badge:''          },
  { id:38, cat:'pizza', name:'Pepperoni Pizza (medium)',      price:799, desc:'Classic pepperoni with extra cheese',           img:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=85', badge:''          },
  { id:39, cat:'pizza', name:'Pepperoni Pizza (large)',       price:1199, desc:'Classic pepperoni with extra cheese',          img:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=85', badge:''          },

  { id:40, cat:'pizza', name:'Hawain Pizza (Small)',          price:449, desc:'Sweet & savoury Hawaiian pizza',                img:'https://www.allrecipes.com/thmb/xYu9Ii8paEyMcJy7sv2mYxwfd7Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg', badge:''          },
  { id:41, cat:'pizza', name:'Hawain Pizza (medium)',         price:799, desc:'Sweet & savoury Hawaiian pizza',                img:'https://www.allrecipes.com/thmb/xYu9Ii8paEyMcJy7sv2mYxwfd7Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg', badge:''          },
  { id:42, cat:'pizza', name:'Hawain Pizza (large)',          price:1199, desc:'Sweet & savoury Hawaiian pizza',               img:'https://www.allrecipes.com/thmb/xYu9Ii8paEyMcJy7sv2mYxwfd7Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg', badge:''          },

  { id:43, cat:'pizza', name:'Lasagna Pizza (Small)',         price:449, desc:'Pizza with lasagna style layered topping',      img:'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=85', badge:''          },
  { id:44, cat:'pizza', name:'Lasagna Pizza (Small)',         price:799, desc:'Pizza with lasagna style layered topping',      img:'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=85', badge:''          },
  { id:45, cat:'pizza', name:'Lasagna Pizza (Small)',         price:1199, desc:'Pizza with lasagna style layered topping',     img:'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=85', badge:''          },
 { id:46, cat:'pizza', name:'Matka Pizza(medium)',           price:799, desc:'One of a kind pizza served in a clay pot',      img:'https://www.brandsynario.com/wp-content/uploads/2021/10/234718385_112475274463695_3527805430996435524_n-696x418.jpg', badge:'Unique'    },

  // ── SHAWARMA ──────────────────────────────────────────────
  { id:47, cat:'shawarma', name:'Chicken Shawarma',       price:169, desc:'Classic chicken shawarma wrap',              img:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=85', badge:'Popular' },
  { id:48, cat:'shawarma', name:'Chicken Cheese Shawarma',price:199, desc:'Chicken shawarma with melted cheese',        img:'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1000&auto=format&fit=crop', badge:''        },
  { id:49, cat:'shawarma', name:'Zinger Shawarma',        price:219, desc:'Crispy zinger pieces in a shawarma wrap',    img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000&auto=format&fit=crop', badge:''        },
  { id:50, cat:'shawarma', name:'Zinger Cheese Shawarma', price:249, desc:'Zinger shawarma loaded with cheese',         img:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', badge:''        },
  { id:51, cat:'shawarma', name:'Arabic Shawarma',        price:199, desc:'Traditional Arabic style shawarma',          img:'https://cdn.pixabay.com/photo/2021/03/02/17/24/shawarma-6063224_1280.jpg', badge:'Special'},
  { id:52, cat:'shawarma', name:'Turkish Shawarma',       price:249, desc:'Turkish spiced chicken shawarma',            img:'https://cdn.pixabay.com/photo/2025/10/16/13/26/kofta-9898218_1280.jpg', badge:''        },

  // ── FRIED WINGS ───────────────────────────────────────────
  { id:53, cat:'wings', name:'Fried Wings (6 pcs)',     price:349, desc:'6 crispy golden fried chicken wings',       img:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=85', badge:'Popular' },
  { id:54, cat:'wings', name:'Fried Wings (12 pcs)',    price:599, desc:'12 crispy fried wings  party pack',        img:'https://cdn.pixabay.com/photo/2023/11/22/21/11/ai-generated-8406464_1280.png', badge:'Family'  },
  { id:55, cat:'wings', name:'Oven Bake Wings (6 pcs)', price:449, desc:'6 oven baked tender wings',                 img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=85', badge:''        },
  { id:56, cat:'wings', name:'Oven Bake Wings (12 pcs)',price:699, desc:'12 oven baked wings  party size',          img:'https://www.tosimplyinspire.com/wp-content/uploads/2022/12/Oven-Baked-Chicken-Wings-8.jpg', badge:'Family'  },
  { id:57, cat:'wings', name:'Buffalo Wings (6 pcs)',   price:399, desc:'Spicy buffal sauce wings',                 img:'https://cdn.pixabay.com/photo/2024/08/04/06/44/ai-generated-8943668_1280.jpg'   },
  { id:58, cat:'wings', name:'Buffalo Wings (12 pcs)',  price:699, desc:'12 spicy buffalo wings  party size',       img:'https://cdn.pixabay.com/photo/2024/08/04/06/44/ai-generated-8943668_1280.jpg'   },

  // ── FRIES ─────────────────────────────────────────────────
  { id:59, cat:'fries', name:'Friend Fries',     price:199, desc:'Classic golden crispy fries',                  img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=85', badge:''           },
  { id:60, cat:'fries', name:'Masala Fries',     price:230, desc:'Fries tossed in house masala spice blend',     img:'https://cdn.pixabay.com/photo/2024/04/16/16/40/ai-generated-8700416_1280.jpg', badge:'Popular'    },
  { id:61, cat:'fries', name:'Mayo Garlic Fries',price:299, desc:'Crispy fries drizzled with garlic mayo',       img:'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg', badge:''           },
  { id:62, cat:'fries', name:'Loaded Fries',     price:499, desc:'Fully loaded fries with toppings & sauce',     img:'https://t4.ftcdn.net/jpg/18/60/11/15/240_F_1860111540_RJ2kezVtFQ1RLKXm81RjzbyWwsrQlX8K.jpg', badge:'Best Seller'},
  { id:63, cat:'fries', name:'Pizza Fries',      price:499, desc:'Fries with pizza sauce, cheese & toppings',    img:'https://cdn.pixabay.com/photo/2024/09/02/10/23/ai-generated-9016392_1280.jpg', badge:'Fusion'     },
  { id:64, cat:'fries', name:'Matka Fries',      price:699, desc:'Unique fries served in a clay matka pot',      img:'https://t4.ftcdn.net/jpg/05/82/47/85/240_F_582478581_xAE0rwKIV7dJ6Gjo5T8p0sCYkm7SEEEM.jpg', badge:'Unique'     },

  // ── WRAPS ─────────────────────────────────────────────────
  { id:65, cat:'wraps', name:'Afghani Wrap',       price:349, desc:'Afghani spiced chicken in a soft tortilla wrap', img:'https://media.istockphoto.com/id/594039684/photo/wraps.jpg?s=612x612&w=0&k=20&c=nZ_MMVwEaP1vOZvuwX-bLqkQdworMbQT_7JwdgLVP5s=', badge:''          },
  { id:66, cat:'wraps', name:'Food Carnival Wrap', price:349, desc:'Our signature loaded wrap',                       img:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=85', badge:'Signature' },
  { id:67, cat:'wraps', name:'Arabic Wrap',        price:349, desc:'Arabic style chicken wrap',                       img:'https://cdn.pixabay.com/photo/2022/08/27/14/12/tawook-chicken-sandwich-7414558_1280.jpg', badge:''          },
  { id:68, cat:'wraps', name:'Zinger Crispy Wrap', price:399, desc:'Crispy zinger in a fresh soft tortilla',          img:'https://thumbs.dreamstime.com/b/zinger-chicken-broast-wrapped-fried-chicken-s-either-zesty-spicy-fillet-crispy-golden-broasted-piece-380661647.jpg?w=768', badge:'Popular'   },

  // ── PASTA ─────────────────────────────────────────────────
  { id:69, cat:'pasta', name:'Food Carnival Pasta (Small)', price:299, desc:'Our signature house pasta',          img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=85', badge:'Special' },
  { id:70, cat:'pasta', name:'Food Carnival Pasta (Large)', price:549, desc:'Large signature house pasta',         img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=85', badge:''        },
  { id:71, cat:'pasta', name:'Chicken Cheese Pasta (Small)',price:299, desc:'Cheesy baked chicken pasta',         img:'https://media.istockphoto.com/id/2015384579/photo/chicken-with-curry-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=ESqeFbmc5_GZTUgrv136x8NOEt4ly7ZlffG3m780zhk=', badge:''        },
  { id:72, cat:'pasta', name:'Chicken Cheese Pasta (large)',price:499, desc:'Cheesy baked chicken pasta',         img:'https://media.istockphoto.com/id/2015384579/photo/chicken-with-curry-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=ESqeFbmc5_GZTUgrv136x8NOEt4ly7ZlffG3m780zhk=', badge:''        },
  { id:73, cat:'pasta', name:'Kababish Pasta (Small)',      price:299, desc:'Kababish spiced pasta',               img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=85', badge:''        },
  { id:74, cat:'pasta', name:'Kababish Pasta (large)',      price:499, desc:'Kababish spiced pasta',               img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=85', badge:''        },
  { id:75, cat:'pasta', name:'Alfredo Pasta (Small)',       price:399, desc:'Rich creamy classic Alfredo pasta',   img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=85', badge:''        },
  { id:76, cat:'pasta', name:'Alfredo Pasta (Large)',       price:599, desc:'Large creamy Alfredo pasta',          img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=85', badge:''        },

  // ── SANDWICH ──────────────────────────────────────────────
  { id:77, cat:'sandwich', name:'Club Sandwich',          price:299, desc:'Triple decker classic club sandwich',     img:'https://cdn.pixabay.com/photo/2019/01/29/20/01/club-sandwich-3963184_1280.jpg', badge:''        },
  { id:78, cat:'sandwich', name:'Chicken Cheese Sandwich',price:349, desc:'Toasted chicken & cheese sandwich',       img:'https://cdn.pixabay.com/photo/2023/08/12/02/58/sandwich-8184642_1280.png', badge:'Popular' },
  { id:79, cat:'sandwich', name:'Pizza Sandwich',         price:399, desc:'Sandwich with pizza sauce & toppings',    img:'https://cdn.pixabay.com/photo/2022/10/07/15/46/sandwich-7505382_1280.jpg', badge:''        },
  { id:80, cat:'sandwich', name:'Grill Sandwich',         price:349, desc:'Hot grilled sandwich with fillings',      img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=85', badge:''        },

  // ── PARATHA ROLL ──────────────────────────────────────────
  { id:81, cat:'paratha', name:'Chicken Paratha',        price:199, desc:'Tender chicken filling in a fresh paratha roll', img:'https://cdn.pixabay.com/photo/2025/10/27/08/44/ai-generated-9919697_1280.jpg', badge:''          },
  { id:82, cat:'paratha', name:'Chicken Cheese Paratha', price:249, desc:'Chicken & melted cheese paratha roll',           img:'https://cdn.pixabay.com/photo/2024/06/26/07/16/ai-generated-8854206_1280.jpg', badge:''          },
  { id:83, cat:'paratha', name:'Zinger Paratha',         price:249, desc:'Crispy zinger in a fresh paratha roll',         img:'https://cdn.pixabay.com/photo/2023/10/21/09/00/ai-generated-8331065_1280.jpg', badge:'Popular'   },
  { id:84, cat:'paratha', name:'Zinger Cheese Paratha',  price:299, desc:'Zinger & cheese stuffed paratha roll',          img:'https://cdn.pixabay.com/photo/2023/07/18/19/19/spring-rolls-8135469_1280.jpg', badge:''          },
  { id:85, cat:'paratha', name:'Food Carnival Paratha',  price:349, desc:'Our signature special paratha roll',            img:'https://cdn.pixabay.com/photo/2024/07/12/15/32/ai-generated-8890639_1280.jpg', badge:'Signature' },

  // ── BUFF BALL ─────────────────────────────────────────────
  { id:86, cat:'buffball', name:'Chicken Buff Ball (2 pcs)', price:299, desc:'2 crispy chicken buff balls',   img:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=85', badge:''        },
  { id:87, cat:'buffball', name:'Chickenstake (5 pcs)',      price:399, desc:'5 juicy chicken stake pieces',  img:'https://cdn.pixabay.com/photo/2024/01/23/08/11/ai-generated-8527043_1280.jpg', badge:'Popular' },

  // ── SODA & DRINKS ─────────────────────────────────────────
  { id:87, cat:'drinks', name:'1.5 Liter Cold Drink',  price:199, desc:'1.5L bottle  Pepsi / 7Up / Mirinda',      img:'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=85', badge:''           },
  { id:88, cat:'drinks', name:'1 Liter Cold Drink',    price:150, desc:'1L cold drink bottle',                     img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=85', badge:''           },
  { id:89, cat:'drinks', name:'500ml Cold Drink',      price:99,  desc:'500ml cold drink can / bottle',            img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=85', badge:''           },
  { id:90, cat:'drinks', name:'Masala Lemon Soda',     price:99,  desc:'Tangy house masala lemon soda',            img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=85', badge:''           },
  { id:91, cat:'drinks', name:'Pineapple Soda',        price:199, desc:'Refreshing pineapple soda',                img:'https://www.torani.com/media/catalog/product/p/i/pineapple_italian_soda.jpg?optimize=medium&fit=bounds&height=815&width=650&canvas=650:815', badge:''           },
  { id:92, cat:'drinks', name:'Mint Margarita',        price:150, desc:'Cool & refreshing mint margarita',         img:'https://t3.ftcdn.net/jpg/07/61/30/56/240_F_761305638_NtaMusibJF0yNiZp1fvRrTaZfWo0gK1R.jpg', badge:'Refreshing' },
  { id:93, cat:'drinks', name:'Doodh Soda',            price:199, desc:'Classic Doodh Soda',                       img:'https://cdn.pixabay.com/photo/2025/01/09/18/42/ai-generated-9322382_1280.jpg', badge:''           },
  { id:94, cat:'drinks', name:'Mix Fruit Soda',        price:299, desc:'Blend of refreshing fruit sodas',          img:'https://t4.ftcdn.net/jpg/09/10/09/75/240_F_910097561_8uUqHdglYYAPZQKWeH6VGJHHrST4u3OI.jpg', badge:''           },

  // ── CHAAT & REFRESHMENT ───────────────────────────────────
  { id:95, cat:'chaat', name:'Tikka Malai Boti Samosa (12 pcs)', price:420, desc:'12 crispy stuffed samosas',            img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=85', badge:'Popular' },
  { id:96, cat:'chaat', name:'Dahi Bhalla',                      price:199, desc:'Classic dahi bhalla with chutney',     img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=85', badge:''        },
  { id:97, cat:'chaat', name:'Fruit Chaat',                      price:320, desc:'Fresh seasonal fruit chaat',           img:'https://www.littlespicejar.com/wp-content/uploads/2025/02/Pakistani-Fruit-Chaat-10-710x1065.jpg', badge:''        },
  { id:98, cat:'chaat', name:'Double Samosa Chaat',              price:190, desc:'Two samosas with chaat topping',       img:'https://diethood.com/wp-content/uploads/2023/02/samosa-chaat-recipe-4.jpg', badge:''        },
  { id:99, cat:'chaat', name:'Samosa Chaat Single',              price:130, desc:'Single samosa chaat',                  img:'https://diethood.com/wp-content/uploads/2023/02/samosa-chaat-recipe-4.jpg', badge:''        },
  { id:100, cat:'chaat', name:'Chana Papri Chaat',                price:190, desc:'Classic chana papri chaat',            img:'https://moonrice.net/wp-content/uploads/2023/03/Papdi-5.jpg', badge:''        },
  { id:101, cat:'chaat', name:'Cream Fruit Chaat',                price:350, desc:'Fruit chaat topped with fresh cream',  img:'https://therecipespk.com/wp-content/uploads/2014/07/Creamy-Fruit-Chaat.jpg', badge:'Premium' },
  {id: 102, cat: 'refresh',name: 'Rajasthani Gol Gappe(12 pcs)',price: 250,desc: 'Crispy gol gappe with two flavor of khatta pani.',img: 'https://media.istockphoto.com/id/525340611/photo/pani-puri-golgappe-chat-item-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ERDjp-8zeCqKa2Rf_eenKesXDpVcKdixrtq6wUSpmVI=', badge: 'New'  },
];

// ============================================================
//  DEALS exactly as on menu board
// ============================================================
const DEALS = [
  { id:'d1',  num:'Deal No. 1',  items:['1 Zinger Burger','1 French Fries','300ml Cold Drink'],                                   oldPrice:560,  price:360,  img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=85' },
  { id:'d2',  num:'Deal No. 2',  items:['1 Lapeta Burger','1 Fries','1 Regular Cold Drink'],                                           oldPrice:440,  price:350,  img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=85' },
  { id:'d3',  num:'Deal No. 3',  items:['1 Small Pizza','5 Wings','1 Ltr Cold Drink'],                                            oldPrice:850,  price:700,  img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=85' },
  { id:'d4',  num:'Deal No. 4',  items:['2 Zinger Burger','2 300ml Cold Drink'],                                                   oldPrice:700,  price:600,  img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&q=85' },
  { id:'d5',  num:'Deal No. 5',  items:['2 Small Pizza','1 Regular Fries','1 Ltr Cold Drink'],                                         oldPrice:1150, price:950,  img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=85' },
  { id:'d6',  num:'Deal No. 6',  items:['1 Medium Pizza','1 Zinger Burger','1 Chicken Shawarma','1 Ltr Cold Drink'],                  oldPrice:1350, price:1150, img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=85' },
  { id:'d7',  num:'Deal No. 7',  items:['1 Zinger Burger','1 Zinger Shawarma','1 Masala Fries','5 Wings','1 Ltr Cold Drink'],          oldPrice:1050, price:900,  img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=85' },
  { id:'d8',  num:'Deal No. 8',  items:['4 Zinger Burger','Fries','1.5 Ltr Cold Drink'],                                              oldPrice:1350, price:1150, img:'https://images.unsplash.com/photo-1625228333734-7fd0dc941c7c?w=500&q=85' },
  { id:'d9',  num:'Deal No. 9',  items:['1 Large Pizza','1 Zinger Shawarma','5 Hot Wings','Fries', '1 Zinger Burger','1.5 Ltr Cold Drink'],       oldPrice:2200, price:1999, img:'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&q=85' },
  { id:'d10', num:'Deal No. 10', items:['1 Small Pizza','1 Chicken Shawarma','1 Chicken Pratha','1 Reg Fries','1 Ltr Bottle'],        oldPrice:1150, price:950,  img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=85' },
  { id:'d11', num:'Deal No. 11', items:['1 Small Pizza','300ml Cold Drink'],                                                           oldPrice:480,  price:430,  img:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=85' },
  { id:'d12', num:'Deal No. 12', items:['12 Hot Wings','1 Ltr Cold Drink'],                                                            oldPrice:750,  price:650,  img:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=85' },
  { id:'d13', num:'Deal No. 13', items:['3 Zinger Burger','1 Reg Fries','1 Ltr Cold Drink'],                                          oldPrice:1250, price:999,  img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&q=85' },
  { id:'d14', num:' Zinger Blast', items:['4 Zinger Burger'],                                                            oldPrice:1200, price:1000, img:'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&q=85' },
  { id:'d14f',num:' Family Pack',  items:['2 Large Pizza','Fries','1.5 Ltr Cold Drink'],                                     oldPrice:2400, price:2000, img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=85' },
  { id:'d14p',num:'Party Pack',   items:['5 Zinger Burger','5 Hot Wings','1.5 Ltr Cold Drink'],                             oldPrice:1950, price:1699, img:'https://images.unsplash.com/photo-1625228333734-7fd0dc941c7c?w=500&q=85' },
];

