import { Product, Category } from './supabase';

export const mockCategories: Category[] = [
  {
    "id": "c0000000-0000-0000-0000-000000000001",
    "name": "Cold Pressed Oils",
    "slug": "cold-pressed-oils",
    "description": "Premium traditional cold-pressed oils extracted without heat.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000002",
    "name": "Ghees",
    "slug": "ghees",
    "description": "Pure, aromatic ghee prepared using traditional methods.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000003",
    "name": "Honeys",
    "slug": "honeys",
    "description": "Raw, unprocessed honey sourced from pristine forests and caves.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000004",
    "name": "Natural Sugars",
    "slug": "natural-sugars",
    "description": "Healthy and unrefined natural sweetening options.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000005",
    "name": "Cookies",
    "slug": "cookies",
    "description": "Delicious and healthy cookies made from nutritious millets and grains.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000006",
    "name": "Healthy Snacks & Drinks",
    "slug": "healthy-snacks-drinks",
    "description": "Guilt-free snacking alternatives and energetic health mixes.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000007",
    "name": "Health Drinks",
    "slug": "health-drinks",
    "description": "Detoxifying and rejuvenating organic health drinks.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000008",
    "name": "Spices & Salt",
    "slug": "spices-salt",
    "description": "Pure handground spices and unprocessed salts.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000009",
    "name": "Pickles",
    "slug": "pickles",
    "description": "Tangy and flavorful traditional home-style pickles.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000010",
    "name": "Herbal Teas",
    "slug": "herbal-teas",
    "description": "Soothing and therapeutic herbal teas made from natural ingredients.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000011",
    "name": "Dried Flowers",
    "slug": "dried-flowers",
    "description": "Select dried edible flowers and leaves rich in benefits.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000012",
    "name": "Rice",
    "slug": "rice",
    "description": "Traditional, heirloom, and ancient varieties of organic rice.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000013",
    "name": "Millets & Pulses",
    "slug": "millets-pulses",
    "description": "High-fiber whole grains, ancient millets, and quality pulses.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000014",
    "name": "Personal Care Products",
    "slug": "personal-care",
    "description": "Organic hair oils, bath powders, and natural cosmetic ingredients.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000015",
    "name": "Wellness Care Products",
    "slug": "wellness-care",
    "description": "Essential wellness oils and traditional natural remedies.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000016",
    "name": "Hygiene & Utility Products",
    "slug": "hygiene-utility",
    "description": "Natural eco-friendly hygiene products and daily essentials.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000017",
    "name": "Soaps",
    "slug": "soaps",
    "description": "Gentle, chemical-free herbal and coconut oil-based soaps.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  },
  {
    "id": "c0000000-0000-0000-0000-000000000018",
    "name": "Pooja Essentials",
    "slug": "pooja-essentials",
    "description": "Pure incense sticks, cones, and traditional pooja items.",
    "image_url": "",
    "created_at": "2026-06-15T12:00:00Z"
  }
];

export const mockProducts: Product[] = [
  {
    "id": "d0000000-0000-0000-0000-000000000001",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Virgin Coconut Oil",
    "slug": "virgin-coconut-oil-100ml",
    "description": "Premium quality Virgin Coconut Oil (100ml) sourced naturally and prepared with care.",
    "price": 165,
    "original_price": 190,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000002",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Virgin Coconut Oil",
    "slug": "virgin-coconut-oil-250ml",
    "description": "Premium quality Virgin Coconut Oil (250ml) sourced naturally and prepared with care.",
    "price": 320,
    "original_price": 368,
    "weight": "250ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000003",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Virgin Coconut Oil",
    "slug": "virgin-coconut-oil-500ml",
    "description": "Premium quality Virgin Coconut Oil (500ml) sourced naturally and prepared with care.",
    "price": 575,
    "original_price": 661,
    "weight": "500ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000004",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Virgin Olive Oil",
    "slug": "virgin-olive-oil-100ml",
    "description": "Premium quality Virgin Olive Oil (100ml) sourced naturally and prepared with care.",
    "price": 210,
    "original_price": 241,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000005",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Virgin Olive Oil",
    "slug": "virgin-olive-oil-250ml",
    "description": "Premium quality Virgin Olive Oil (250ml) sourced naturally and prepared with care.",
    "price": 407,
    "original_price": 468,
    "weight": "250ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000006",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Virgin Olive Oil",
    "slug": "virgin-olive-oil-500ml",
    "description": "Premium quality Virgin Olive Oil (500ml) sourced naturally and prepared with care.",
    "price": 740,
    "original_price": 851,
    "weight": "500ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Virgin_Olive_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000007",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Coconut Oil",
    "slug": "coconut-oil-100ml",
    "description": "Premium quality Coconut Oil (100ml) sourced naturally and prepared with care.",
    "price": 135,
    "original_price": 155,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000008",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Coconut Oil",
    "slug": "coconut-oil-250ml",
    "description": "Premium quality Coconut Oil (250ml) sourced naturally and prepared with care.",
    "price": 245,
    "original_price": 282,
    "weight": "250ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000009",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Coconut Oil",
    "slug": "coconut-oil-500ml",
    "description": "Premium quality Coconut Oil (500ml) sourced naturally and prepared with care.",
    "price": 410,
    "original_price": 471,
    "weight": "500ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000010",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Coconut Oil",
    "slug": "coconut-oil-1000ml",
    "description": "Premium quality Coconut Oil (1000ml) sourced naturally and prepared with care.",
    "price": 680,
    "original_price": 782,
    "weight": "1000ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Coconut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000011",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Groundnut Oil",
    "slug": "groundnut-oil-500ml",
    "description": "Premium quality Groundnut Oil (500ml) sourced naturally and prepared with care.",
    "price": 350,
    "original_price": 402,
    "weight": "500ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000012",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Groundnut Oil",
    "slug": "groundnut-oil-1000ml",
    "description": "Premium quality Groundnut Oil (1000ml) sourced naturally and prepared with care.",
    "price": 590,
    "original_price": 678,
    "weight": "1000ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Groundnut_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000013",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Gingelly Oil",
    "slug": "gingelly-oil-100ml",
    "description": "Premium quality Gingelly Oil (100ml) sourced naturally and prepared with care.",
    "price": 145,
    "original_price": 167,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000014",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Gingelly Oil",
    "slug": "gingelly-oil-250ml",
    "description": "Premium quality Gingelly Oil (250ml) sourced naturally and prepared with care.",
    "price": 250,
    "original_price": 288,
    "weight": "250ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000015",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Gingelly Oil",
    "slug": "gingelly-oil-500ml",
    "description": "Premium quality Gingelly Oil (500ml) sourced naturally and prepared with care.",
    "price": 405,
    "original_price": 466,
    "weight": "500ml",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000016",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Gingelly Oil",
    "slug": "gingelly-oil-1000ml",
    "description": "Premium quality Gingelly Oil (1000ml) sourced naturally and prepared with care.",
    "price": 765,
    "original_price": 880,
    "weight": "1000ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/GINGELLY_OIL_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000017",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Pomace Olive Oil",
    "slug": "pomace-olive-oil-500ml",
    "description": "Premium quality Pomace Olive Oil (500ml) sourced naturally and prepared with care.",
    "price": 475,
    "original_price": 546,
    "weight": "500ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Pomace_Olive_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Pomace_Olive_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Pomace_Olive_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Pomace_Olive_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Pomace_Olive_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Pomace_Olive_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000018",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Castor Oil",
    "slug": "castor-oil-100ml",
    "description": "Premium quality Castor Oil (100ml) sourced naturally and prepared with care.",
    "price": 135,
    "original_price": 155,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Castor_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Castor_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Castor_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Castor_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Castor_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Castor_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000019",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Almond Oil",
    "slug": "almond-oil-60ml",
    "description": "Premium quality Almond Oil (60ml) sourced naturally and prepared with care.",
    "price": 210,
    "original_price": 241,
    "weight": "60ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000020",
    "category_id": "c0000000-0000-0000-0000-000000000001",
    "name": "Almond Oil",
    "slug": "almond-oil-100ml",
    "description": "Premium quality Almond Oil (100ml) sourced naturally and prepared with care.",
    "price": 315,
    "original_price": 362,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_1.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_2.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_3.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_4.png",
      "/products/RAINBOW ENTERPRISES/1. Cold Pressed Oils/Almond_Oil_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000021",
    "category_id": "c0000000-0000-0000-0000-000000000002",
    "name": "Desi Cow Ghee",
    "slug": "desi-cow-ghee-240g",
    "description": "Premium quality Desi Cow Ghee (240g) sourced naturally and prepared with care.",
    "price": 765,
    "original_price": 880,
    "weight": "240g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_1.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_2.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_3.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_4.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000022",
    "category_id": "c0000000-0000-0000-0000-000000000002",
    "name": "Desi Cow Ghee",
    "slug": "desi-cow-ghee-450g",
    "description": "Premium quality Desi Cow Ghee (450g) sourced naturally and prepared with care.",
    "price": 1375,
    "original_price": 1581,
    "weight": "450g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_1.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_2.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_3.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_4.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000023",
    "category_id": "c0000000-0000-0000-0000-000000000002",
    "name": "Desi Cow Ghee",
    "slug": "desi-cow-ghee-1kg",
    "description": "Premium quality Desi Cow Ghee (1Kg) sourced naturally and prepared with care.",
    "price": 2875,
    "original_price": 3306,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_1.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_2.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_3.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_4.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/Pure Desi Cow Ghee_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000024",
    "category_id": "c0000000-0000-0000-0000-000000000002",
    "name": "Cow Ghee",
    "slug": "cow-ghee-240g",
    "description": "Premium quality Cow Ghee (240g) sourced naturally and prepared with care.",
    "price": 485,
    "original_price": 558,
    "weight": "240g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_1.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_2.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_3.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_4.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000025",
    "category_id": "c0000000-0000-0000-0000-000000000002",
    "name": "Cow Ghee",
    "slug": "cow-ghee-450g",
    "description": "Premium quality Cow Ghee (450g) sourced naturally and prepared with care.",
    "price": 870,
    "original_price": 1000,
    "weight": "450g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_1.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_2.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_3.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_4.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000026",
    "category_id": "c0000000-0000-0000-0000-000000000002",
    "name": "Cow Ghee",
    "slug": "cow-ghee-1kg",
    "description": "Premium quality Cow Ghee (1Kg) sourced naturally and prepared with care.",
    "price": 1775,
    "original_price": 2041,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_1.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_2.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_3.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_4.png",
      "/products/RAINBOW ENTERPRISES/2. Ghees/COW GHEE_5.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000027",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Rose Petals in Honey",
    "slug": "rose-petals-in-honey-200g",
    "description": "Premium quality Rose Petals in Honey (200g) sourced naturally and prepared with care.",
    "price": 330,
    "original_price": 379,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/Rose Petals in Honey.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/Rose Petals in Honey.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000028",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Rose Petals in Honey",
    "slug": "rose-petals-in-honey-500g",
    "description": "Premium quality Rose Petals in Honey (500g) sourced naturally and prepared with care.",
    "price": 690,
    "original_price": 793,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/Rose Petals in Honey.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/Rose Petals in Honey.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000029",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Fig in Honey",
    "slug": "fig-in-honey-200g",
    "description": "Premium quality Fig in Honey (200g) sourced naturally and prepared with care.",
    "price": 350,
    "original_price": 402,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/fig in honey.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/fig in honey.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000030",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Mountain Honey",
    "slug": "mountain-honey-250g",
    "description": "Premium quality Mountain Honey (250g) sourced naturally and prepared with care.",
    "price": 325,
    "original_price": 374,
    "weight": "250g",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_2.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000031",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Mountain Honey",
    "slug": "mountain-honey-500g",
    "description": "Premium quality Mountain Honey (500g) sourced naturally and prepared with care.",
    "price": 575,
    "original_price": 661,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_2.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000032",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Mountain Honey",
    "slug": "mountain-honey-1kg",
    "description": "Premium quality Mountain Honey (1Kg) sourced naturally and prepared with care.",
    "price": 990,
    "original_price": 1138,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_2.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/MOUNTAIN_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000033",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Cave Honey",
    "slug": "cave-honey-250g",
    "description": "Premium quality Cave Honey (250g) sourced naturally and prepared with care.",
    "price": 325,
    "original_price": 374,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000034",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Cave Honey",
    "slug": "cave-honey-500g",
    "description": "Premium quality Cave Honey (500g) sourced naturally and prepared with care.",
    "price": 575,
    "original_price": 661,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000035",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Cave Honey",
    "slug": "cave-honey-1kg",
    "description": "Premium quality Cave Honey (1Kg) sourced naturally and prepared with care.",
    "price": 990,
    "original_price": 1138,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/CAVE_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000036",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Kombu Honey",
    "slug": "kombu-honey-250g",
    "description": "Premium quality Kombu Honey (250g) sourced naturally and prepared with care.",
    "price": 325,
    "original_price": 374,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000037",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Kombu Honey",
    "slug": "kombu-honey-500g",
    "description": "Premium quality Kombu Honey (500g) sourced naturally and prepared with care.",
    "price": 575,
    "original_price": 661,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000038",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Kombu Honey",
    "slug": "kombu-honey-1kg",
    "description": "Premium quality Kombu Honey (1Kg) sourced naturally and prepared with care.",
    "price": 990,
    "original_price": 1138,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/KOMBU_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000039",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Siru Honey",
    "slug": "siru-honey-250g",
    "description": "Premium quality Siru Honey (250g) sourced naturally and prepared with care.",
    "price": 325,
    "original_price": 374,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000040",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Siru Honey",
    "slug": "siru-honey-500g",
    "description": "Premium quality Siru Honey (500g) sourced naturally and prepared with care.",
    "price": 575,
    "original_price": 661,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000041",
    "category_id": "c0000000-0000-0000-0000-000000000003",
    "name": "Siru Honey",
    "slug": "siru-honey-1kg",
    "description": "Premium quality Siru Honey (1Kg) sourced naturally and prepared with care.",
    "price": 990,
    "original_price": 1138,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_1.jpg",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_2.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_3.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_4.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_5.png",
      "/products/RAINBOW ENTERPRISES/3. Honeys/SIRU_HONEY_6.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000042",
    "category_id": "c0000000-0000-0000-0000-000000000004",
    "name": "Cane Sugar",
    "slug": "cane-sugar-1kg",
    "description": "Premium quality Cane Sugar (1Kg) sourced naturally and prepared with care.",
    "price": 190,
    "original_price": 218,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/4. Natural Sugars/CANE_SUGAR.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/4. Natural Sugars/CANE_SUGAR.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000043",
    "category_id": "c0000000-0000-0000-0000-000000000004",
    "name": "Palm Sugar",
    "slug": "palm-sugar-500g",
    "description": "Premium quality Palm Sugar (500g) sourced naturally and prepared with care.",
    "price": 420,
    "original_price": 483,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/4. Natural Sugars/PALM_SUGAR.JPG",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/4. Natural Sugars/PALM_SUGAR.JPG",
      "/products/RAINBOW ENTERPRISES/4. Natural Sugars/PALM-JAGGERY-CUBES.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000044",
    "category_id": "c0000000-0000-0000-0000-000000000004",
    "name": "Coconut Sugar",
    "slug": "coconut-sugar-500g",
    "description": "Premium quality Coconut Sugar (500g) sourced naturally and prepared with care.",
    "price": 430,
    "original_price": 494,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/4. Natural Sugars/COCONUT_SUGAR.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/4. Natural Sugars/COCONUT_SUGAR.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000045",
    "category_id": "c0000000-0000-0000-0000-000000000004",
    "name": "Palm Jaggery Cubes",
    "slug": "palm-jaggery-cubes-500g",
    "description": "Premium quality Palm Jaggery Cubes (500g) sourced naturally and prepared with care.",
    "price": 665,
    "original_price": 765,
    "weight": "500g",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/4. Natural Sugars/PALM-JAGGERY-CUBES.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/4. Natural Sugars/PALM-JAGGERY-CUBES.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000046",
    "category_id": "c0000000-0000-0000-0000-000000000005",
    "name": "Jack Fruit & Millet Cookie",
    "slug": "jack-fruit-millet-cookie-100g",
    "description": "Premium quality Jack Fruit & Millet Cookie (100g) sourced naturally and prepared with care.",
    "price": 95,
    "original_price": 109,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/5. Cookies/JACK-FRUIT-MILLET-COOKIES.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/5. Cookies/JACK-FRUIT-MILLET-COOKIES.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000047",
    "category_id": "c0000000-0000-0000-0000-000000000005",
    "name": "Multigrain Cookie",
    "slug": "multigrain-cookie-100g",
    "description": "Premium quality Multigrain Cookie (100g) sourced naturally and prepared with care.",
    "price": 95,
    "original_price": 109,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/5. Cookies/MULTIGRAIN_COOKIES.JPG",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/5. Cookies/MULTIGRAIN_COOKIES.JPG"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000048",
    "category_id": "c0000000-0000-0000-0000-000000000005",
    "name": "Foxtail Millet Cookie",
    "slug": "foxtail-millet-cookie-100g",
    "description": "Premium quality Foxtail Millet Cookie (100g) sourced naturally and prepared with care.",
    "price": 95,
    "original_price": 109,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/5. Cookies/FOXTAIL-MILLET.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/5. Cookies/FOXTAIL-MILLET.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000049",
    "category_id": "c0000000-0000-0000-0000-000000000005",
    "name": "Pearl Millet Cookie",
    "slug": "pearl-millet-cookie-100g",
    "description": "Premium quality Pearl Millet Cookie (100g) sourced naturally and prepared with care.",
    "price": 95,
    "original_price": 109,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/5. Cookies/PEARL-MILLET.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/5. Cookies/PEARL-MILLET.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000050",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Millet Muesli",
    "slug": "millet-muesli-250g",
    "description": "Premium quality Millet Muesli (250g) sourced naturally and prepared with care.",
    "price": 280,
    "original_price": 322,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/MILLET_MUESLI_1.JPG",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/MILLET_MUESLI_1.JPG",
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/MILLET_MUESLI_2.JPG"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000051",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Sprouted Multigrain Energy Ladoos",
    "slug": "sprouted-multigrain-energy-ladoos-250g",
    "description": "Premium quality Sprouted Multigrain Energy Ladoos (250g) sourced naturally and prepared with care.",
    "price": 350,
    "original_price": 402,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Sprouted-Multigrain-Energy-Ladoos-.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Sprouted-Multigrain-Energy-Ladoos-.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000052",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Crunchy Energy Bars (Moringa)",
    "slug": "crunchy-energy-bars-moringa-5-nos",
    "description": "Premium quality Crunchy Energy Bars (Moringa) (5 Nos) sourced naturally and prepared with care.",
    "price": 145,
    "original_price": 167,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Crunchy Energy Bars  (Moringa).jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Crunchy Energy Bars  (Moringa).jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000053",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Crunchy Energy Bars (Moringa)",
    "slug": "crunchy-energy-bars-moringa-10-nos",
    "description": "Premium quality Crunchy Energy Bars (Moringa) (10 Nos) sourced naturally and prepared with care.",
    "price": 275,
    "original_price": 316,
    "weight": "10 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Crunchy Energy Bars  (Moringa).jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Crunchy Energy Bars  (Moringa).jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000054",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Multigrain Health Mix",
    "slug": "multigrain-health-mix-250g",
    "description": "Premium quality Multigrain Health Mix (250g) sourced naturally and prepared with care.",
    "price": 230,
    "original_price": 264,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Multigrain Health Mix.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Multigrain Health Mix.jpg",
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Multigrain-health-mix-with-ladoo-1.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000055",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "ABCD Powder",
    "slug": "abcd-powder-200g",
    "description": "Premium quality ABCD Powder (200g) sourced naturally and prepared with care.",
    "price": 290,
    "original_price": 334,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/ABCD_POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/ABCD_POWDER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000056",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Dates Powder",
    "slug": "dates-powder-200g",
    "description": "Premium quality Dates Powder (200g) sourced naturally and prepared with care.",
    "price": 275,
    "original_price": 316,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/DATES_POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/DATES_POWDER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000057",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Coco D'lite",
    "slug": "coco-d-lite-250g",
    "description": "Premium quality Coco D'lite (250g) sourced naturally and prepared with care.",
    "price": 450,
    "original_price": 518,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Cocoa_Dlite.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Cocoa_Dlite.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000058",
    "category_id": "c0000000-0000-0000-0000-000000000006",
    "name": "Sukkumalli Coffee",
    "slug": "sukkumalli-coffee-250g",
    "description": "Premium quality Sukkumalli Coffee (250g) sourced naturally and prepared with care.",
    "price": 220,
    "original_price": 253,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Sukku_Malli_Kaapi_Powder.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/6. Healthy Snacks & Drinks/Sukku_Malli_Kaapi_Powder.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000059",
    "category_id": "c0000000-0000-0000-0000-000000000007",
    "name": "Honey Amla",
    "slug": "honey-amla-6-nos",
    "description": "Premium quality Honey Amla (6 Nos) sourced naturally and prepared with care.",
    "price": 125,
    "original_price": 144,
    "weight": "6 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/7. Health Drinks/honey amla.jpeg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/honey amla.jpeg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000060",
    "category_id": "c0000000-0000-0000-0000-000000000007",
    "name": "Avir Detox",
    "slug": "avir-detox-250g",
    "description": "Premium quality Avir Detox (250g) sourced naturally and prepared with care.",
    "price": 275,
    "original_price": 316,
    "weight": "250g",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/7. Health Drinks/AVIR-DEROX.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/AVIR-DEROX.jpg",
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/Avir-Detox-2.png",
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/Avir-Detox-3.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000061",
    "category_id": "c0000000-0000-0000-0000-000000000007",
    "name": "Thirta Blend Lemon & Ginger",
    "slug": "thirta-blend-lemon-ginger-500ml",
    "description": "Premium quality Thirta Blend Lemon & Ginger (500ml) sourced naturally and prepared with care.",
    "price": 380,
    "original_price": 437,
    "weight": "500ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/7. Health Drinks/THIRTA-BLEND.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/THIRTA-BLEND.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000062",
    "category_id": "c0000000-0000-0000-0000-000000000007",
    "name": "Sprouted Ragi Flour Porridge",
    "slug": "sprouted-ragi-flour-porridge-250g",
    "description": "Premium quality Sprouted Ragi Flour Porridge (250g) sourced naturally and prepared with care.",
    "price": 165,
    "original_price": 190,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/7. Health Drinks/Sprouted-Ragi-Flour-Porridge-250g-2.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/Sprouted-Ragi-Flour-Porridge-250g-2.png",
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/Sprouted-Ragi-Flour-Porridge-250g-3.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000063",
    "category_id": "c0000000-0000-0000-0000-000000000007",
    "name": "Ragi Coffee",
    "slug": "ragi-coffee-250g",
    "description": "Premium quality Ragi Coffee (250g) sourced naturally and prepared with care.",
    "price": 280,
    "original_price": 322,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/7. Health Drinks/RAGI-COFFEE-POWDER-1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/RAGI-COFFEE-POWDER-1.jpg",
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/Ragi-Coffee-Powder-Image-2.png",
      "/products/RAINBOW ENTERPRISES/7. Health Drinks/Ragi-Coffee-Powder-Image-3.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000064",
    "category_id": "c0000000-0000-0000-0000-000000000008",
    "name": "Turmeric Powder",
    "slug": "turmeric-powder-150g",
    "description": "Premium quality Turmeric Powder (150g) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "150g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/8. Spices & Salt/TURMERIC-POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/TURMERIC-POWDER.jpg",
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/2-Turmeric-250g.jpg",
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/3-Turmeric-500g.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000065",
    "category_id": "c0000000-0000-0000-0000-000000000008",
    "name": "Turmeric Powder",
    "slug": "turmeric-powder-250g",
    "description": "Premium quality Turmeric Powder (250g) sourced naturally and prepared with care.",
    "price": 210,
    "original_price": 241,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/8. Spices & Salt/2-Turmeric-250g.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/2-Turmeric-250g.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000066",
    "category_id": "c0000000-0000-0000-0000-000000000008",
    "name": "Turmeric Powder",
    "slug": "turmeric-powder-500g",
    "description": "Premium quality Turmeric Powder (500g) sourced naturally and prepared with care.",
    "price": 280,
    "original_price": 322,
    "weight": "500g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/8. Spices & Salt/3-Turmeric-500g.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/3-Turmeric-500g.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000067",
    "category_id": "c0000000-0000-0000-0000-000000000008",
    "name": "Tamarind",
    "slug": "tamarind-250g",
    "description": "Premium quality Tamarind (250g) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/8. Spices & Salt/Tamarind-250g-Package.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/Tamarind-250g-Package.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000068",
    "category_id": "c0000000-0000-0000-0000-000000000008",
    "name": "Himalayan Pink Salt",
    "slug": "himalayan-pink-salt-1kg",
    "description": "Premium quality Himalayan Pink Salt (1Kg) sourced naturally and prepared with care.",
    "price": 185,
    "original_price": 213,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/8. Spices & Salt/HIMALAYAN-PINK-SALT-FREE-FLOW.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/8. Spices & Salt/HIMALAYAN-PINK-SALT-FREE-FLOW.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000069",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Citron Pickle",
    "slug": "citron-pickle-200g",
    "description": "Premium quality Citron Pickle (200g) sourced naturally and prepared with care.",
    "price": 135,
    "original_price": 155,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/cirton-PICKLE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/cirton-PICKLE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000070",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Mango Pickle",
    "slug": "mango-pickle-200g",
    "description": "Premium quality Mango Pickle (200g) sourced naturally and prepared with care.",
    "price": 135,
    "original_price": 155,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/MANGO-PICKLE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/MANGO-PICKLE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000071",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Tomato Thokku",
    "slug": "tomato-thokku-200g",
    "description": "Premium quality Tomato Thokku (200g) sourced naturally and prepared with care.",
    "price": 135,
    "original_price": 155,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/TOMATO-THOKKU.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/TOMATO-THOKKU.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000072",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Lemon Pickle",
    "slug": "lemon-pickle-200g",
    "description": "Premium quality Lemon Pickle (200g) sourced naturally and prepared with care.",
    "price": 130,
    "original_price": 150,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/LEMON-PICKLE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/LEMON-PICKLE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000073",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Onion Thokku",
    "slug": "onion-thokku-200g",
    "description": "Premium quality Onion Thokku (200g) sourced naturally and prepared with care.",
    "price": 155,
    "original_price": 178,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/ONION-THOKKU.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/ONION-THOKKU.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000074",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Vatha Kuzhambu Paste",
    "slug": "vatha-kuzhambu-paste-200g",
    "description": "Premium quality Vatha Kuzhambu Paste (200g) sourced naturally and prepared with care.",
    "price": 160,
    "original_price": 184,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/VATHAKULAMBU.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/VATHAKULAMBU.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000075",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Pulihora Paste",
    "slug": "pulihora-paste-200g",
    "description": "Premium quality Pulihora Paste (200g) sourced naturally and prepared with care.",
    "price": 160,
    "original_price": 184,
    "weight": "200g",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/pulihora-paste.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/pulihora-paste.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000076",
    "category_id": "c0000000-0000-0000-0000-000000000009",
    "name": "Garlic Pickle",
    "slug": "garlic-pickle-200g",
    "description": "Premium quality Garlic Pickle (200g) sourced naturally and prepared with care.",
    "price": 195,
    "original_price": 224,
    "weight": "200g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/9. Pickles/GARLIC-PICKLE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/9. Pickles/GARLIC-PICKLE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000077",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Apple Cinnamon Tea",
    "slug": "apple-cinnamon-tea-5-nos",
    "description": "Premium quality Apple Cinnamon Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 140,
    "original_price": 161,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/Apple cinnamon tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/Apple cinnamon tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000078",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Apple Cinnamon Tea",
    "slug": "apple-cinnamon-tea-12-nos",
    "description": "Premium quality Apple Cinnamon Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 275,
    "original_price": 316,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/Apple cinnamon tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/Apple cinnamon tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000079",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Lemongrass Tea",
    "slug": "lemongrass-tea-5-nos",
    "description": "Premium quality Lemongrass Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/lemongrass-tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/lemongrass-tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000080",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Lemongrass Tea",
    "slug": "lemongrass-tea-12-nos",
    "description": "Premium quality Lemongrass Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 275,
    "original_price": 316,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/lemongrass-tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/lemongrass-tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000081",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Peppermint Tea",
    "slug": "peppermint-tea-5-nos",
    "description": "Premium quality Peppermint Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/peppermint tea.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/peppermint tea.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000082",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Peppermint Tea",
    "slug": "peppermint-tea-12-nos",
    "description": "Premium quality Peppermint Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 290,
    "original_price": 334,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/peppermint tea.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/peppermint tea.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000083",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Fruit Tea",
    "slug": "fruit-tea-5-nos",
    "description": "Premium quality Fruit Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 130,
    "original_price": 150,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fruit-tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fruit-tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000084",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Fruit Tea",
    "slug": "fruit-tea-12-nos",
    "description": "Premium quality Fruit Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 225,
    "original_price": 259,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fruit-tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fruit-tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000085",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Ginger Lemon Tea",
    "slug": "ginger-lemon-tea-5-nos",
    "description": "Premium quality Ginger Lemon Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 140,
    "original_price": 161,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/GINGER-LEMON-TEA.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/GINGER-LEMON-TEA.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000086",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Ginger Lemon Tea",
    "slug": "ginger-lemon-tea-12-nos",
    "description": "Premium quality Ginger Lemon Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 345,
    "original_price": 397,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/GINGER-LEMON-TEA.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/GINGER-LEMON-TEA.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000087",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Turmeric Cinnamon Tea",
    "slug": "turmeric-cinnamon-tea-5-nos",
    "description": "Premium quality Turmeric Cinnamon Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 140,
    "original_price": 161,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/turmeric cinnamon tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/turmeric cinnamon tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000088",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Turmeric Cinnamon Tea",
    "slug": "turmeric-cinnamon-tea-12-nos",
    "description": "Premium quality Turmeric Cinnamon Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 325,
    "original_price": 374,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/turmeric cinnamon tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/turmeric cinnamon tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000089",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Fennel Tea",
    "slug": "fennel-tea-5-nos",
    "description": "Premium quality Fennel Tea (5 Nos) sourced naturally and prepared with care.",
    "price": 140,
    "original_price": 161,
    "weight": "5 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fennel-tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fennel-tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000090",
    "category_id": "c0000000-0000-0000-0000-000000000010",
    "name": "Fennel Tea",
    "slug": "fennel-tea-12-nos",
    "description": "Premium quality Fennel Tea (12 Nos) sourced naturally and prepared with care.",
    "price": 275,
    "original_price": 316,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fennel-tea.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/10. Herbal Teas/fennel-tea.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000091",
    "category_id": "c0000000-0000-0000-0000-000000000011",
    "name": "Hibiscus Flower",
    "slug": "hibiscus-flower-20g",
    "description": "Premium quality Hibiscus Flower (20g) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "20g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/11. Dried Flowers/hibiscus-flower.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/11. Dried Flowers/hibiscus-flower.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000092",
    "category_id": "c0000000-0000-0000-0000-000000000011",
    "name": "Blue Pea",
    "slug": "blue-pea-20g",
    "description": "Premium quality Blue Pea (20g) sourced naturally and prepared with care.",
    "price": 190,
    "original_price": 218,
    "weight": "20g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/11. Dried Flowers/blue-pea-folower.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/11. Dried Flowers/blue-pea-folower.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000093",
    "category_id": "c0000000-0000-0000-0000-000000000011",
    "name": "Aavaram Poo",
    "slug": "aavaram-poo-20g",
    "description": "Premium quality Aavaram Poo (20g) sourced naturally and prepared with care.",
    "price": 130,
    "original_price": 150,
    "weight": "20g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/11. Dried Flowers/AVARAMPOO-FLOWER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/11. Dried Flowers/AVARAMPOO-FLOWER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000094",
    "category_id": "c0000000-0000-0000-0000-000000000011",
    "name": "Strobilanthes (PB) Leaves",
    "slug": "strobilanthes-pb-leaves-50g",
    "description": "Premium quality Strobilanthes (PB) Leaves (50g) sourced naturally and prepared with care.",
    "price": 180,
    "original_price": 207,
    "weight": "50g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/11. Dried Flowers/Strobilanthes.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/11. Dried Flowers/Strobilanthes.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000095",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Jeeraga Samba",
    "slug": "jeeraga-samba-1kg",
    "description": "Premium quality Jeeraga Samba (1Kg) sourced naturally and prepared with care.",
    "price": 220,
    "original_price": 253,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/JEERAGA-SAMBA-RICE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/JEERAGA-SAMBA-RICE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000096",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Mappillai Samba",
    "slug": "mappillai-samba-1kg",
    "description": "Premium quality Mappillai Samba (1Kg) sourced naturally and prepared with care.",
    "price": 155,
    "original_price": 178,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/MAPPILLAI-SAMBA-RICE-1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/MAPPILLAI-SAMBA-RICE-1.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000097",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Red (Sivappu) Kavuni",
    "slug": "red-sivappu-kavuni-1kg",
    "description": "Premium quality Red (Sivappu) Kavuni (1Kg) sourced naturally and prepared with care.",
    "price": 170,
    "original_price": 195,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/RED-KAVUNI-RICE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/RED-KAVUNI-RICE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000098",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "grAma Rice",
    "slug": "grama-rice-1kg",
    "description": "Premium quality grAma Rice (1Kg) sourced naturally and prepared with care.",
    "price": 250,
    "original_price": 288,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/grama-the-country-tice-1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/grama-the-country-tice-1.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000099",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Parboiled Rice",
    "slug": "parboiled-rice-1kg",
    "description": "Premium quality Parboiled Rice (1Kg) sourced naturally and prepared with care.",
    "price": 135,
    "original_price": 155,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/BROKEN-PARBOILED-RICE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/BROKEN-PARBOILED-RICE.jpg",
      "/products/RAINBOW ENTERPRISES/12. Rice/PARBOILED-RICE-1.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000100",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Broken Parboiled Rice",
    "slug": "broken-parboiled-rice-1kg",
    "description": "Premium quality Broken Parboiled Rice (1Kg) sourced naturally and prepared with care.",
    "price": 120,
    "original_price": 138,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/BROKEN-PARBOILED-RICE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/BROKEN-PARBOILED-RICE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000101",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Black Kavuni",
    "slug": "black-kavuni-1kg",
    "description": "Premium quality Black Kavuni (1Kg) sourced naturally and prepared with care.",
    "price": 380,
    "original_price": 437,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/BLACK-KAVUNI-RICE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/BLACK-KAVUNI-RICE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000102",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Kerala Mattai",
    "slug": "kerala-mattai-1kg",
    "description": "Premium quality Kerala Mattai (1Kg) sourced naturally and prepared with care.",
    "price": 120,
    "original_price": 138,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/KERALA-MATTAI-RICE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/KERALA-MATTAI-RICE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000103",
    "category_id": "c0000000-0000-0000-0000-000000000012",
    "name": "Karung Kuruvai Rice",
    "slug": "karung-kuruvai-rice-1kg",
    "description": "Premium quality Karung Kuruvai Rice (1Kg) sourced naturally and prepared with care.",
    "price": 165,
    "original_price": 190,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/12. Rice/karung kuruvai rice.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/12. Rice/karung kuruvai rice.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000104",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Little Millet",
    "slug": "little-millet-1kg",
    "description": "Premium quality Little Millet (1Kg) sourced naturally and prepared with care.",
    "price": 285,
    "original_price": 328,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/littlemillet.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/littlemillet.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000105",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Kodo Millet",
    "slug": "kodo-millet-1kg",
    "description": "Premium quality Kodo Millet (1Kg) sourced naturally and prepared with care.",
    "price": 225,
    "original_price": 259,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/kodo millet.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/kodo millet.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000106",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Foxtail Millet",
    "slug": "foxtail-millet-1kg",
    "description": "Premium quality Foxtail Millet (1Kg) sourced naturally and prepared with care.",
    "price": 225,
    "original_price": 259,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/FOXTAIL-MILLET-300x300.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/FOXTAIL-MILLET-300x300.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000107",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Finger Millet",
    "slug": "finger-millet-1kg",
    "description": "Premium quality Finger Millet (1Kg) sourced naturally and prepared with care.",
    "price": 165,
    "original_price": 190,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/finger millet.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/finger millet.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000108",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Country Pearl Millet",
    "slug": "country-pearl-millet-1kg",
    "description": "Premium quality Country Pearl Millet (1Kg) sourced naturally and prepared with care.",
    "price": 185,
    "original_price": 213,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/COUNTRY-PEARL-MILLET-300x300.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/COUNTRY-PEARL-MILLET-300x300.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000109",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Black Gram Deskinned",
    "slug": "black-gram-deskinned-1kg",
    "description": "Premium quality Black Gram Deskinned (1Kg) sourced naturally and prepared with care.",
    "price": 340,
    "original_price": 391,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/blackgramdeskinned.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/blackgramdeskinned.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000110",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Yellow Lentil",
    "slug": "yellow-lentil-1kg",
    "description": "Premium quality Yellow Lentil (1Kg) sourced naturally and prepared with care.",
    "price": 385,
    "original_price": 443,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/YELLOW-LENTIL-300x300.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/YELLOW-LENTIL-300x300.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000111",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Barnyard Millet",
    "slug": "barnyard-millet-1kg",
    "description": "Premium quality Barnyard Millet (1Kg) sourced naturally and prepared with care.",
    "price": 225,
    "original_price": 259,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/BARNYARD-MILLET-300x300.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/BARNYARD-MILLET-300x300.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000112",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Green Gram Whole",
    "slug": "green-gram-whole-1kg",
    "description": "Premium quality Green Gram Whole (1Kg) sourced naturally and prepared with care.",
    "price": 295,
    "original_price": 339,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/GREEN-GRAM-WHOLE-300x300.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/GREEN-GRAM-WHOLE-300x300.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000113",
    "category_id": "c0000000-0000-0000-0000-000000000013",
    "name": "Green Gram Broken",
    "slug": "green-gram-broken-1kg",
    "description": "Premium quality Green Gram Broken (1Kg) sourced naturally and prepared with care.",
    "price": 345,
    "original_price": 397,
    "weight": "1Kg",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/GREEN-GRAM-BROKEN-300x300.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/13. Millets & Pulses/GREEN-GRAM-BROKEN-300x300.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000114",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Herbal Bath Powder",
    "slug": "herbal-bath-powder-250g",
    "description": "Premium quality Herbal Bath Powder (250g) sourced naturally and prepared with care.",
    "price": 375,
    "original_price": 431,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/HERBAL-BATHING-POWDER-1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/HERBAL-BATHING-POWDER-1.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000115",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Multani Mitti Powder",
    "slug": "multani-mitti-powder-250g",
    "description": "Premium quality Multani Mitti Powder (250g) sourced naturally and prepared with care.",
    "price": 235,
    "original_price": 270,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/MULTANI-MITTI-1.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/MULTANI-MITTI-1.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000116",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Therapeutic Mud",
    "slug": "therapeutic-mud-250g",
    "description": "Premium quality Therapeutic Mud (250g) sourced naturally and prepared with care.",
    "price": 175,
    "original_price": 201,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/THERAPEUTIC-MUD.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/THERAPEUTIC-MUD.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000117",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Shikakai Powder",
    "slug": "shikakai-powder-250g",
    "description": "Premium quality Shikakai Powder (250g) sourced naturally and prepared with care.",
    "price": 185,
    "original_price": 213,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/SHIKAKKAI-POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/SHIKAKKAI-POWDER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000118",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Oil Cake Tree Powder",
    "slug": "oil-cake-tree-powder-250g",
    "description": "Premium quality Oil Cake Tree Powder (250g) sourced naturally and prepared with care.",
    "price": 185,
    "original_price": 213,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/OIL-CAKE-TREE-POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/OIL-CAKE-TREE-POWDER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000119",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Herbal Skin Care Powder",
    "slug": "herbal-skin-care-powder-250g",
    "description": "Premium quality Herbal Skin Care Powder (250g) sourced naturally and prepared with care.",
    "price": 575,
    "original_price": 661,
    "weight": "250g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/HERBAL-SKIN-CARE-POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/HERBAL-SKIN-CARE-POWDER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000120",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Moringa Beauty Drops",
    "slug": "moringa-beauty-drops-30ml",
    "description": "Premium quality Moringa Beauty Drops (30ml) sourced naturally and prepared with care.",
    "price": 475,
    "original_price": 546,
    "weight": "30ml",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/moringa beauty drops.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/moringa beauty drops.jpg",
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/Moringa-Beauty-Drops-200-ml-1.png",
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/Moringa-Beauty-Drops-200-ml-2.png",
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/Moringa-Beauty-Drops-200-ml.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000121",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Moringa Beauty Drops",
    "slug": "moringa-beauty-drops-100ml",
    "description": "Premium quality Moringa Beauty Drops (100ml) sourced naturally and prepared with care.",
    "price": 1675,
    "original_price": 1926,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/moringa beauty drops.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/moringa beauty drops.jpg",
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/Moringa-Beauty-Drops-200-ml-1.png",
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/Moringa-Beauty-Drops-200-ml-2.png",
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/Moringa-Beauty-Drops-200-ml.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000122",
    "category_id": "c0000000-0000-0000-0000-000000000014",
    "name": "Hair Care Oil",
    "slug": "hair-care-oil-100ml",
    "description": "Premium quality Hair Care Oil (100ml) sourced naturally and prepared with care.",
    "price": 175,
    "original_price": 201,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/14. Personal Care Products/OIL-CAKE-TREE-POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/14. Personal Care Products/OIL-CAKE-TREE-POWDER.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000123",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Rosemary Oil",
    "slug": "rosemary-oil-30ml",
    "description": "Premium quality Rosemary Oil (30ml) sourced naturally and prepared with care.",
    "price": 1950,
    "original_price": 2242,
    "weight": "30ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/ROSEMARY.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/ROSEMARY.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000124",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Curcumin Oil",
    "slug": "curcumin-oil-30ml",
    "description": "Premium quality Curcumin Oil (30ml) sourced naturally and prepared with care.",
    "price": 1750,
    "original_price": 2012,
    "weight": "30ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/CURCUMIN-OIL.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/CURCUMIN-OIL.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000125",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Nochi (Mustard Oil) Pain Relief",
    "slug": "nochi-mustard-oil-pain-relief-200ml",
    "description": "Premium quality Nochi (Mustard Oil) Pain Relief (200ml) sourced naturally and prepared with care.",
    "price": 430,
    "original_price": 494,
    "weight": "200ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/nochi-oil.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/nochi-oil.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000126",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Kuppaimeni Oil",
    "slug": "kuppaimeni-oil-200ml",
    "description": "Premium quality Kuppaimeni Oil (200ml) sourced naturally and prepared with care.",
    "price": 430,
    "original_price": 494,
    "weight": "200ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/kuppaimeni.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/kuppaimeni.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000127",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Eucalyptus Oil",
    "slug": "eucalyptus-oil-30ml",
    "description": "Premium quality Eucalyptus Oil (30ml) sourced naturally and prepared with care.",
    "price": 220,
    "original_price": 253,
    "weight": "30ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/EUCALYPTUS-OIL.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/EUCALYPTUS-OIL.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000128",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Lemongrass Oil",
    "slug": "lemongrass-oil-30ml",
    "description": "Premium quality Lemongrass Oil (30ml) sourced naturally and prepared with care.",
    "price": 220,
    "original_price": 253,
    "weight": "30ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/LEMONGRASS-OIL.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/LEMONGRASS-OIL.jpg",
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/lemongrass-side.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000129",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Three Plus Oil",
    "slug": "three-plus-oil-200ml",
    "description": "Premium quality Three Plus Oil (200ml) sourced naturally and prepared with care.",
    "price": 495,
    "original_price": 569,
    "weight": "200ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/1-Three-Plus-Oil-Pungai-Elupai-Musturd-Oil-Skin-Rejuvenator-200ml-600x600.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/1-Three-Plus-Oil-Pungai-Elupai-Musturd-Oil-Skin-Rejuvenator-200ml-600x600.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000130",
    "category_id": "c0000000-0000-0000-0000-000000000015",
    "name": "Apple Cider Vinegar",
    "slug": "apple-cider-vinegar-100ml",
    "description": "Premium quality Apple Cider Vinegar (100ml) sourced naturally and prepared with care.",
    "price": 185,
    "original_price": 213,
    "weight": "100ml",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/Apple-Cider-Vinegar-100-ml.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/15. Wellness Care Products/Apple-Cider-Vinegar-100-ml.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000131",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Enema Can",
    "slug": "enema-can-1-no",
    "description": "Premium quality Enema Can (1 No) sourced naturally and prepared with care.",
    "price": 165,
    "original_price": 190,
    "weight": "1 No",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/ENEMA-CAN.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/ENEMA-CAN.jpg",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Enema-Can-1.png",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Enema-Can-2.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000132",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Nasal Wash Bottle",
    "slug": "nasal-wash-bottle-1-no",
    "description": "Premium quality Nasal Wash Bottle (1 No) sourced naturally and prepared with care.",
    "price": 110,
    "original_price": 126,
    "weight": "1 No",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/NASAL-WASH-BOTTLE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/NASAL-WASH-BOTTLE.jpg",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Nasal-Wash-Bottle-1.png",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Nasal-Wash-Bottle-2.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000133",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Eye Wash Cup",
    "slug": "eye-wash-cup-2-nos",
    "description": "Premium quality Eye Wash Cup (2 Nos) sourced naturally and prepared with care.",
    "price": 85,
    "original_price": 98,
    "weight": "2 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/EYE-WASH-CUP.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/EYE-WASH-CUP.jpg",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Eye-Wash-Cup-1-.png",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Eye-Wash-Cup-2-.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000134",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Bamboo Tooth Brush",
    "slug": "bamboo-tooth-brush-3-nos",
    "description": "Premium quality Bamboo Tooth Brush (3 Nos) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "3 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/BAMBOO-TOOTH-BRUSH.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/BAMBOO-TOOTH-BRUSH.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000135",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Herbal Tooth Powder",
    "slug": "herbal-tooth-powder-60g",
    "description": "Premium quality Herbal Tooth Powder (60g) sourced naturally and prepared with care.",
    "price": 150,
    "original_price": 172,
    "weight": "60g",
    "stock": 100,
    "is_featured": true,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/HERBAL-TOOTH-POWDER.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/HERBAL-TOOTH-POWDER.jpg",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Herbal-Tooth-Powder-65-g-1.png",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Herbal-Tooth-Powder-65-g-2.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000136",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Sanitary Napkin",
    "slug": "sanitary-napkin-m",
    "description": "Premium quality Sanitary Napkin (M) sourced naturally and prepared with care.",
    "price": 280,
    "original_price": 322,
    "weight": "M",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/SANITARY-NAPKIN.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/SANITARY-NAPKIN.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000137",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Sanitary Napkin",
    "slug": "sanitary-napkin-l",
    "description": "Premium quality Sanitary Napkin (L) sourced naturally and prepared with care.",
    "price": 285,
    "original_price": 328,
    "weight": "L",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/SANITARY-NAPKIN.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/SANITARY-NAPKIN.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000138",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Sanitary Napkin",
    "slug": "sanitary-napkin-xl",
    "description": "Premium quality Sanitary Napkin (XL) sourced naturally and prepared with care.",
    "price": 290,
    "original_price": 334,
    "weight": "XL",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/SANITARY-NAPKIN.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/SANITARY-NAPKIN.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000139",
    "category_id": "c0000000-0000-0000-0000-000000000016",
    "name": "Moringa Leaf Tablet",
    "slug": "moringa-leaf-tablet-100-nos",
    "description": "Premium quality Moringa Leaf Tablet (100 Nos) sourced naturally and prepared with care.",
    "price": 320,
    "original_price": 368,
    "weight": "100 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Moringa-Leaf-Tablet-100-Nos-1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Moringa-Leaf-Tablet-100-Nos-1.png",
      "/products/RAINBOW ENTERPRISES/16.Hygiene & Utility Products/Moringa-Leaf-Tablet-100-Nos-2.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000140",
    "category_id": "c0000000-0000-0000-0000-000000000017",
    "name": "Rose with Aloe Vera Soap",
    "slug": "rose-with-aloe-vera-soap-100g",
    "description": "Premium quality Rose with Aloe Vera Soap (100g) sourced naturally and prepared with care.",
    "price": 425,
    "original_price": 489,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/17. Soaps/Aloe_Vera_Soap.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/17. Soaps/Aloe_Vera_Soap.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000141",
    "category_id": "c0000000-0000-0000-0000-000000000017",
    "name": "Kuppaimeni Soap",
    "slug": "kuppaimeni-soap-100g",
    "description": "Premium quality Kuppaimeni Soap (100g) sourced naturally and prepared with care.",
    "price": 165,
    "original_price": 190,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/17. Soaps/Kuppaimeni-Herbal-Bath-1.png",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/17. Soaps/Kuppaimeni-Herbal-Bath-1.png",
      "/products/RAINBOW ENTERPRISES/17. Soaps/Kuppaimeni-Herbal-Bath-2.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000142",
    "category_id": "c0000000-0000-0000-0000-000000000017",
    "name": "Jasmine with Coconut Milk Soap",
    "slug": "jasmine-with-coconut-milk-soap-100g",
    "description": "Premium quality Jasmine with Coconut Milk Soap (100g) sourced naturally and prepared with care.",
    "price": 425,
    "original_price": 489,
    "weight": "100g",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/17. Soaps/JASMINE-WITH-COCONUT-MILK-SOAP.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/17. Soaps/JASMINE-WITH-COCONUT-MILK-SOAP.jpg",
      "/products/RAINBOW ENTERPRISES/17. Soaps/Jasmine-_-Coconut-Milk-Herbal-Bath-1.png",
      "/products/RAINBOW ENTERPRISES/17. Soaps/Jasmine-_-Coconut-Milk-Herbal-Bath-2.png"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000143",
    "category_id": "c0000000-0000-0000-0000-000000000018",
    "name": "Incense Sticks (Rose)",
    "slug": "incense-sticks-rose-30-nos",
    "description": "Premium quality Incense Sticks (Rose) (30 Nos) sourced naturally and prepared with care.",
    "price": 125,
    "original_price": 144,
    "weight": "30 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-STICKS-–-ROSE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-STICKS-–-ROSE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000144",
    "category_id": "c0000000-0000-0000-0000-000000000018",
    "name": "Incense Sticks (Herbal)",
    "slug": "incense-sticks-herbal-30-nos",
    "description": "Premium quality Incense Sticks (Herbal) (30 Nos) sourced naturally and prepared with care.",
    "price": 175,
    "original_price": 201,
    "weight": "30 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-STICKS-–-HERBAL-2.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-STICKS-–-HERBAL-2.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000145",
    "category_id": "c0000000-0000-0000-0000-000000000018",
    "name": "Incense Sticks (Champak, Lavender & Sandal)",
    "slug": "incense-sticks-champak-lavender-sandal-30-nos",
    "description": "Premium quality Incense Sticks (Champak, Lavender & Sandal) (30 Nos) sourced naturally and prepared with care.",
    "price": 125,
    "original_price": 144,
    "weight": "30 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-STICKS-–-CHAMPAK-LAVENDER-AND-SANDAL-600x600.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-STICKS-–-CHAMPAK-LAVENDER-AND-SANDAL-600x600.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000146",
    "category_id": "c0000000-0000-0000-0000-000000000018",
    "name": "Incense Cones (Jasmine)",
    "slug": "incense-cones-jasmine-30-nos",
    "description": "Premium quality Incense Cones (Jasmine) (30 Nos) sourced naturally and prepared with care.",
    "price": 175,
    "original_price": 201,
    "weight": "30 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-CONES-–-JASMINE.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/INCENSE-CONES-–-JASMINE.jpg"
    ]
  },
  {
    "id": "d0000000-0000-0000-0000-000000000147",
    "category_id": "c0000000-0000-0000-0000-000000000018",
    "name": "Sambirani Dhoop",
    "slug": "sambirani-dhoop-12-nos",
    "description": "Premium quality Sambirani Dhoop (12 Nos) sourced naturally and prepared with care.",
    "price": 75,
    "original_price": 86,
    "weight": "12 Nos",
    "stock": 100,
    "is_featured": false,
    "image_url": "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/sambiranidhoop.jpg",
    "created_at": "2026-06-15T12:00:00Z",
    "images": [
      "/products/RAINBOW ENTERPRISES/18. Pooja Essentials/sambiranidhoop.jpg"
    ]
  }
];

// Helper database functions that use Supabase if configured, or fall back to mock data
import { supabase, isSupabaseConfigured } from './supabase';

export async function getCategories(): Promise<Category[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('categories').select('*').order('name');
      if (!error && data) return data as Category[];
    } catch (e) {
      console.warn('Supabase categories fetch failed, using fallback mock data:', e);
    }
  }
  return mockCategories;
}

export async function getProducts(categoryId?: string, isFeaturedOnly = false): Promise<Product[]> {
  if (isSupabaseConfigured) {
    try {
      let query = supabase.from('products').select('*');
      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }
      if (isFeaturedOnly) {
        query = query.eq('is_featured', true);
      }
      const { data, error } = await query.order('name');
      if (!error && data) {
        return (data as Product[]).map(dbProduct => {
          const mockProduct = mockProducts.find(p => p.id === dbProduct.id || p.slug === dbProduct.slug);
          return {
            ...dbProduct,
            image_url: dbProduct.image_url || mockProduct?.image_url || '',
            images: mockProduct?.images || (dbProduct.image_url ? [dbProduct.image_url] : (mockProduct?.image_url ? [mockProduct.image_url] : []))
          };
        });
      }
    } catch (e) {
      console.warn('Supabase products fetch failed, using fallback mock data:', e);
    }
  }

  let results = [...mockProducts];
  if (categoryId) {
    // If it is a slug instead of ID, resolve it first
    const category = mockCategories.find(c => c.id === categoryId || c.slug === categoryId);
    if (category) {
      results = results.filter(p => p.category_id === category.id);
    } else {
      results = [];
    }
  }
  if (isFeaturedOnly) {
    results = results.filter(p => p.is_featured);
  }
  return results;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('products').select('*').eq('slug', slug).single();
      if (!error && data) {
        const dbProduct = data as Product;
        const mockProduct = mockProducts.find(p => p.id === dbProduct.id || p.slug === dbProduct.slug);
        return {
          ...dbProduct,
          image_url: dbProduct.image_url || mockProduct?.image_url || '',
          images: mockProduct?.images || (dbProduct.image_url ? [dbProduct.image_url] : (mockProduct?.image_url ? [mockProduct.image_url] : []))
        };
      }
    } catch (e) {
      console.warn('Supabase product slug fetch failed, using fallback mock data:', e);
    }
  }
  return mockProducts.find(p => p.slug === slug) || null;
}
