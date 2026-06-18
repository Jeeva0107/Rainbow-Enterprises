import json
import re

categories = [
    {"name": "Cold Pressed Oils", "slug": "cold-pressed-oils", "desc": "Premium traditional cold-pressed oils extracted without heat."},
    {"name": "Ghees", "slug": "ghees", "desc": "Pure, aromatic ghee prepared using traditional methods."},
    {"name": "Honeys", "slug": "honeys", "desc": "Raw, unprocessed honey sourced from pristine forests and caves."},
    {"name": "Natural Sugars", "slug": "natural-sugars", "desc": "Healthy and unrefined natural sweetening options."},
    {"name": "Cookies", "slug": "cookies", "desc": "Delicious and healthy cookies made from nutritious millets and grains."},
    {"name": "Healthy Snacks & Drinks", "slug": "healthy-snacks-drinks", "desc": "Guilt-free snacking alternatives and energetic health mixes."},
    {"name": "Health Drinks", "slug": "health-drinks", "desc": "Detoxifying and rejuvenating organic health drinks."},
    {"name": "Spices & Salt", "slug": "spices-salt", "desc": "Pure handground spices and unprocessed salts."},
    {"name": "Pickles", "slug": "pickles", "desc": "Tangy and flavorful traditional home-style pickles."},
    {"name": "Herbal Teas", "slug": "herbal-teas", "desc": "Soothing and therapeutic herbal teas made from natural ingredients."},
    {"name": "Dried Flowers", "slug": "dried-flowers", "desc": "Select dried edible flowers and leaves rich in benefits."},
    {"name": "Rice", "slug": "rice", "desc": "Traditional, heirloom, and ancient varieties of organic rice."},
    {"name": "Millets & Pulses", "slug": "millets-pulses", "desc": "High-fiber whole grains, ancient millets, and quality pulses."},
    {"name": "Personal Care Products", "slug": "personal-care", "desc": "Organic hair oils, bath powders, and natural cosmetic ingredients."},
    {"name": "Wellness Care Products", "slug": "wellness-care", "desc": "Essential wellness oils and traditional natural remedies."},
    {"name": "Hygiene & Utility Products", "slug": "hygiene-utility", "desc": "Natural eco-friendly hygiene products and daily essentials."},
    {"name": "Soaps", "slug": "soaps", "desc": "Gentle, chemical-free herbal and coconut oil-based soaps."},
    {"name": "Pooja Essentials", "slug": "pooja-essentials", "desc": "Pure incense sticks, cones, and traditional pooja items."}
]

raw_products = [
    # 1. Cold Pressed Oils
    {"cat": "cold-pressed-oils", "name": "Virgin Coconut Oil", "variants": [("100ml", 165), ("250ml", 320), ("500ml", 575)]},
    {"cat": "cold-pressed-oils", "name": "Virgin Olive Oil", "variants": [("100ml", 210), ("250ml", 407), ("500ml", 740)]},
    {"cat": "cold-pressed-oils", "name": "Coconut Oil", "variants": [("100ml", 135), ("250ml", 245), ("500ml", 410), ("1000ml", 680)]},
    {"cat": "cold-pressed-oils", "name": "Groundnut Oil", "variants": [("500ml", 350), ("1000ml", 590)]},
    {"cat": "cold-pressed-oils", "name": "Gingelly Oil", "variants": [("100ml", 145), ("250ml", 250), ("500ml", 405), ("1000ml", 765)]},
    {"cat": "cold-pressed-oils", "name": "Pomace Olive Oil", "variants": [("500ml", 475)]},
    {"cat": "cold-pressed-oils", "name": "Castor Oil", "variants": [("100ml", 135)]},
    {"cat": "cold-pressed-oils", "name": "Almond Oil", "variants": [("60ml", 210), ("100ml", 315)]},
    
    # 2. Ghees
    {"cat": "ghees", "name": "Desi Cow Ghee", "variants": [("240g", 765), ("450g", 1375), ("1Kg", 2875)]},
    {"cat": "ghees", "name": "Cow Ghee", "variants": [("240g", 485), ("450g", 870), ("1Kg", 1775)]},
    
    # 3. Honeys
    {"cat": "honeys", "name": "Rose Petals in Honey", "variants": [("200g", 330), ("500g", 690)]},
    {"cat": "honeys", "name": "Fig in Honey", "variants": [("200g", 350)]},
    {"cat": "honeys", "name": "Mountain Honey", "variants": [("250g", 325), ("500g", 575), ("1Kg", 990)]},
    {"cat": "honeys", "name": "Cave Honey", "variants": [("250g", 325), ("500g", 575), ("1Kg", 990)]},
    {"cat": "honeys", "name": "Kombu Honey", "variants": [("250g", 325), ("500g", 575), ("1Kg", 990)]},
    {"cat": "honeys", "name": "Siru Honey", "variants": [("250g", 325), ("500g", 575), ("1Kg", 990)]},
    
    # 4. Natural Sugars
    {"cat": "natural-sugars", "name": "Cane Sugar", "variants": [("1Kg", 190)]},
    {"cat": "natural-sugars", "name": "Palm Sugar", "variants": [("500g", 420)]},
    {"cat": "natural-sugars", "name": "Coconut Sugar", "variants": [("500g", 430)]},
    {"cat": "natural-sugars", "name": "Palm Jaggery Cubes", "variants": [("500g", 665)]},
    
    # 5. Cookies
    {"cat": "cookies", "name": "Jack Fruit & Millet Cookie", "variants": [("100g", 95)]},
    {"cat": "cookies", "name": "Multigrain Cookie", "variants": [("100g", 95)]},
    {"cat": "cookies", "name": "Foxtail Millet Cookie", "variants": [("100g", 95)]},
    {"cat": "cookies", "name": "Pearl Millet Cookie", "variants": [("100g", 95)]},
    
    # 6. Healthy Snacks & Drinks
    {"cat": "healthy-snacks-drinks", "name": "Millet Muesli", "variants": [("250g", 280)]},
    {"cat": "healthy-snacks-drinks", "name": "Sprouted Multigrain Energy Ladoos", "variants": [("250g", 350)]},
    {"cat": "healthy-snacks-drinks", "name": "Crunchy Energy Bars (Moringa)", "variants": [("5 Nos", 145), ("10 Nos", 275)]},
    {"cat": "healthy-snacks-drinks", "name": "Multigrain Health Mix", "variants": [("250g", 230)]},
    {"cat": "healthy-snacks-drinks", "name": "ABCD Powder", "variants": [("200g", 290)]},
    {"cat": "healthy-snacks-drinks", "name": "Dates Powder", "variants": [("200g", 275)]},
    {"cat": "healthy-snacks-drinks", "name": "Coco D'lite", "variants": [("250g", 450)]},
    {"cat": "healthy-snacks-drinks", "name": "Sukkumalli Coffee", "variants": [("250g", 220)]},
    
    # 7. Health Drinks
    {"cat": "health-drinks", "name": "Honey Amla", "variants": [("6 Nos", 125)]},
    {"cat": "health-drinks", "name": "Avir Detox", "variants": [("250g", 275)]},
    {"cat": "health-drinks", "name": "Thirta Blend Lemon & Ginger", "variants": [("500ml", 380)]},
    {"cat": "health-drinks", "name": "Sprouted Ragi Flour Porridge", "variants": [("250g", 165)]},
    {"cat": "health-drinks", "name": "Ragi Coffee", "variants": [("250g", 280)]},
    
    # 8. Spices & Salt
    {"cat": "spices-salt", "name": "Turmeric Powder", "variants": [("150g", 150), ("250g", 210), ("500g", 280)]},
    {"cat": "spices-salt", "name": "Tamarind", "variants": [("250g", 150)]},
    {"cat": "spices-salt", "name": "Himalayan Pink Salt", "variants": [("1Kg", 185)]},
    
    # 9. Pickles
    {"cat": "pickles", "name": "Citron Pickle", "variants": [("200g", 135)]},
    {"cat": "pickles", "name": "Mango Pickle", "variants": [("200g", 135)]},
    {"cat": "pickles", "name": "Tomato Thokku", "variants": [("200g", 135)]},
    {"cat": "pickles", "name": "Lemon Pickle", "variants": [("200g", 130)]},
    {"cat": "pickles", "name": "Onion Thokku", "variants": [("200g", 155)]},
    {"cat": "pickles", "name": "Vatha Kuzhambu Paste", "variants": [("200g", 160)]},
    {"cat": "pickles", "name": "Pulihora Paste", "variants": [("200g", 160)]},
    {"cat": "pickles", "name": "Garlic Pickle", "variants": [("200g", 195)]},
    
    # 10. Herbal Teas
    {"cat": "herbal-teas", "name": "Apple Cinnamon Tea", "variants": [("5 Nos", 140), ("12 Nos", 275)]},
    {"cat": "herbal-teas", "name": "Lemongrass Tea", "variants": [("5 Nos", 150), ("12 Nos", 275)]},
    {"cat": "herbal-teas", "name": "Peppermint Tea", "variants": [("5 Nos", 150), ("12 Nos", 290)]},
    {"cat": "herbal-teas", "name": "Fruit Tea", "variants": [("5 Nos", 130), ("12 Nos", 225)]},
    {"cat": "herbal-teas", "name": "Ginger Lemon Tea", "variants": [("5 Nos", 140), ("12 Nos", 345)]},
    {"cat": "herbal-teas", "name": "Turmeric Cinnamon Tea", "variants": [("5 Nos", 140), ("12 Nos", 325)]},
    {"cat": "herbal-teas", "name": "Fennel Tea", "variants": [("5 Nos", 140), ("12 Nos", 275)]},
    
    # 11. Dried Flowers
    {"cat": "dried-flowers", "name": "Hibiscus Flower", "variants": [("20g", 150)]},
    {"cat": "dried-flowers", "name": "Blue Pea", "variants": [("20g", 190)]},
    {"cat": "dried-flowers", "name": "Aavaram Poo", "variants": [("20g", 130)]},
    {"cat": "dried-flowers", "name": "Strobilanthes (PB) Leaves", "variants": [("50g", 180)]},
    
    # 12. Rice
    {"cat": "rice", "name": "Jeeraga Samba", "variants": [("1Kg", 220)]},
    {"cat": "rice", "name": "Mappillai Samba", "variants": [("1Kg", 155)]},
    {"cat": "rice", "name": "Red (Sivappu) Kavuni", "variants": [("1Kg", 170)]},
    {"cat": "rice", "name": "grAma Rice", "variants": [("1Kg", 250)]},
    {"cat": "rice", "name": "Parboiled Rice", "variants": [("1Kg", 135)]},
    {"cat": "rice", "name": "Broken Parboiled Rice", "variants": [("1Kg", 120)]},
    {"cat": "rice", "name": "Black Kavuni", "variants": [("1Kg", 380)]},
    {"cat": "rice", "name": "Kerala Mattai", "variants": [("1Kg", 120)]},
    {"cat": "rice", "name": "Karung Kuruvai Rice", "variants": [("1Kg", 165)]},
    
    # 13. Millets & Pulses
    {"cat": "millets-pulses", "name": "Little Millet", "variants": [("1Kg", 285)]},
    {"cat": "millets-pulses", "name": "Kodo Millet", "variants": [("1Kg", 225)]},
    {"cat": "millets-pulses", "name": "Foxtail Millet", "variants": [("1Kg", 225)]},
    {"cat": "millets-pulses", "name": "Finger Millet", "variants": [("1Kg", 165)]},
    {"cat": "millets-pulses", "name": "Country Pearl Millet", "variants": [("1Kg", 185)]},
    {"cat": "millets-pulses", "name": "Black Gram Deskinned", "variants": [("1Kg", 340)]},
    {"cat": "millets-pulses", "name": "Yellow Lentil", "variants": [("1Kg", 385)]},
    {"cat": "millets-pulses", "name": "Barnyard Millet", "variants": [("1Kg", 225)]},
    {"cat": "millets-pulses", "name": "Green Gram Whole", "variants": [("1Kg", 295)]},
    {"cat": "millets-pulses", "name": "Green Gram Broken", "variants": [("1Kg", 345)]},
    
    # 14. Personal Care Products
    {"cat": "personal-care", "name": "Herbal Bath Powder", "variants": [("250g", 375)]},
    {"cat": "personal-care", "name": "Multani Mitti Powder", "variants": [("250g", 235)]},
    {"cat": "personal-care", "name": "Therapeutic Mud", "variants": [("250g", 175)]},
    {"cat": "personal-care", "name": "Shikakai Powder", "variants": [("250g", 185)]},
    {"cat": "personal-care", "name": "Oil Cake Tree Powder", "variants": [("250g", 185)]},
    {"cat": "personal-care", "name": "Herbal Skin Care Powder", "variants": [("250g", 575)]},
    {"cat": "personal-care", "name": "Moringa Beauty Drops", "variants": [("30ml", 475), ("100ml", 1675)]},
    {"cat": "personal-care", "name": "Hair Care Oil", "variants": [("100ml", 175)]},
    
    # 15. Wellness Care Products
    {"cat": "wellness-care", "name": "Rosemary Oil", "variants": [("30ml", 1950)]},
    {"cat": "wellness-care", "name": "Curcumin Oil", "variants": [("30ml", 1750)]},
    {"cat": "wellness-care", "name": "Nochi (Mustard Oil) Pain Relief", "variants": [("200ml", 430)]},
    {"cat": "wellness-care", "name": "Kuppaimeni Oil", "variants": [("200ml", 430)]},
    {"cat": "wellness-care", "name": "Eucalyptus Oil", "variants": [("30ml", 220)]},
    {"cat": "wellness-care", "name": "Lemongrass Oil", "variants": [("30ml", 220)]},
    {"cat": "wellness-care", "name": "Three Plus Oil", "variants": [("200ml", 495)]},
    {"cat": "wellness-care", "name": "Apple Cider Vinegar", "variants": [("100ml", 185)]},
    
    # 16. Hygiene & Utility Products
    {"cat": "hygiene-utility", "name": "Enema Can", "variants": [("1 No", 165)]},
    {"cat": "hygiene-utility", "name": "Nasal Wash Bottle", "variants": [("1 No", 110)]},
    {"cat": "hygiene-utility", "name": "Eye Wash Cup", "variants": [("2 Nos", 85)]},
    {"cat": "hygiene-utility", "name": "Bamboo Tooth Brush", "variants": [("3 Nos", 150)]},
    {"cat": "hygiene-utility", "name": "Herbal Tooth Powder", "variants": [("60g", 150)]},
    {"cat": "hygiene-utility", "name": "Sanitary Napkin", "variants": [("M", 280), ("L", 285), ("XL", 290)]},
    {"cat": "hygiene-utility", "name": "Moringa Leaf Tablet", "variants": [("100 Nos", 320)]},
    
    # 17. Soaps
    {"cat": "soaps", "name": "Rose with Aloe Vera Soap", "variants": [("100g", 425)]},
    {"cat": "soaps", "name": "Kuppaimeni Soap", "variants": [("100g", 165)]},
    {"cat": "soaps", "name": "Jasmine with Coconut Milk Soap", "variants": [("100g", 425)]},
    
    # 18. Pooja Essentials
    {"cat": "pooja-essentials", "name": "Incense Sticks (Rose)", "variants": [("30 Nos", 125)]},
    {"cat": "pooja-essentials", "name": "Incense Sticks (Herbal)", "variants": [("30 Nos", 175)]},
    {"cat": "pooja-essentials", "name": "Incense Sticks (Champak, Lavender & Sandal)", "variants": [("30 Nos", 125)]},
    {"cat": "pooja-essentials", "name": "Incense Cones (Jasmine)", "variants": [("30 Nos", 175)]},
    {"cat": "pooja-essentials", "name": "Sambirani Dhoop", "variants": [("12 Nos", 75)]}
]

# Helper to slugify product names
def slugify(name):
    # Lowercase, replace non-alphanumeric with hyphen
    s = name.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

# Generate SQL File Content
sql_content = []
sql_content.append("-- Seed Categories")
sql_content.append("INSERT INTO public.categories (id, name, slug, description, image_url) VALUES")

cat_values = []
for i, cat in enumerate(categories):
    desc = cat["desc"]
    slug = cat["slug"]
    name = cat["name"]
    # We assign static UUIDs to categories for reference
    uuid_str = f"c0000000-0000-0000-0000-{i+1:012d}"
    cat["id"] = uuid_str
    cat_values.append(f"('{uuid_str}', '{name}', '{slug}', '{desc}', '')")
sql_content.append(",\n".join(cat_values))
sql_content.append("ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description;\n")

sql_content.append("-- Seed Products")
product_inserts = []
prod_id_counter = 1

for item in raw_products:
    cat_slug = item["cat"]
    cat_id = next(c["id"] for c in categories if c["slug"] == cat_slug)
    name = item["name"]
    
    for weight, price in item["variants"]:
        # generate a unique slug for this variant
        base_slug = slugify(name)
        weight_slug = slugify(weight)
        full_slug = f"{base_slug}-{weight_slug}"
        
        uuid_str = f"p0000000-0000-0000-0000-{prod_id_counter:012d}"
        desc = f"Premium quality {name} ({weight}) sourced naturally and prepared with care."
        
        original_price = round(price * 1.15, 2) # 15% discount mock
        
        # INSERT statement
        p_val = f"('{uuid_str}', '{cat_id}', '{name}', '{full_slug}', '{desc}', {price:.2f}, {original_price:.2f}, '{weight}', 100, false, '')"
        product_inserts.append(p_val)
        
        prod_id_counter += 1

sql_content.append("INSERT INTO public.products (id, category_id, name, slug, description, price, original_price, weight, stock, is_featured, image_url) VALUES")
# Split inserts in chunks to avoid single massive statement if needed, but 147 rows is fine in one insert
sql_content.append(",\n".join(product_inserts))
sql_content.append("ON CONFLICT (slug) DO NOTHING;")

# Write seed.sql
with open("c:/Users/jeeva/OneDrive/Documents/JDJ/rainbow-enterprises/database/seed.sql", "w", encoding="utf-8") as f:
    f.write("\n".join(sql_content))

# Generate TypeScript File Content (mockData.ts)
ts_categories = []
for i, cat in enumerate(categories):
    ts_categories.append({
        "id": cat["id"],
        "name": cat["name"],
        "slug": cat["slug"],
        "description": cat["desc"],
        "image_url": "",
        "created_at": "2026-06-15T12:00:00Z"
    })

ts_products = []
prod_id_counter = 1
for item in raw_products:
    cat_slug = item["cat"]
    cat_id = next(c["id"] for c in categories if c["slug"] == cat_slug)
    name = item["name"]
    
    for weight, price in item["variants"]:
        base_slug = slugify(name)
        weight_slug = slugify(weight)
        full_slug = f"{base_slug}-{weight_slug}"
        
        desc = f"Premium quality {name} ({weight}) sourced naturally and prepared with care."
        original_price = round(price * 1.15)
        
        # Make some items featured
        is_featured = (prod_id_counter % 15 == 0)
        
        ts_products.append({
            "id": f"p-{prod_id_counter}",
            "category_id": cat_id,
            "name": name,
            "slug": full_slug,
            "description": desc,
            "price": float(price),
            "original_price": float(original_price),
            "weight": weight,
            "stock": 100,
            "is_featured": is_featured,
            "image_url": "",
            "created_at": "2026-06-15T12:00:00Z"
        })
        prod_id_counter += 1

ts_file_content = f"""import {{ Product, Category }} from './supabase';

export const mockCategories: Category[] = {json.dumps(ts_categories, indent=2)};

export const mockProducts: Product[] = {json.dumps(ts_products, indent=2)};

// Helper database functions that use Supabase if configured, or fall back to mock data
import {{ supabase, isSupabaseConfigured }} from './supabase';

export async function getCategories(): Promise<Category[]> {{
  if (isSupabaseConfigured) {{
    try {{
      const {{ data, error }} = await supabase.from('categories').select('*').order('name');
      if (!error && data) return data as Category[];
    }} catch (e) {{
      console.warn('Supabase categories fetch failed, using fallback mock data:', e);
    }}
  }}
  return mockCategories;
}}

export async function getProducts(categoryId?: string, isFeaturedOnly = false): Promise<Product[]> {{
  if (isSupabaseConfigured) {{
    try {{
      let query = supabase.from('products').select('*');
      if (categoryId) {{
        query = query.eq('category_id', categoryId);
      }}
      if (isFeaturedOnly) {{
        query = query.eq('is_featured', true);
      }}
      const {{ data, error }} = await query.order('name');
      if (!error && data) return data as Product[];
    }} catch (e) {{
      console.warn('Supabase products fetch failed, using fallback mock data:', e);
    }}
  }}

  let results = [...mockProducts];
  if (categoryId) {{
    // If it is a slug instead of ID, resolve it first
    const category = mockCategories.find(c => c.id === categoryId || c.slug === categoryId);
    if (category) {{
      results = results.filter(p => p.category_id === category.id);
    }} else {{
      results = [];
    }}
  }}
  if (isFeaturedOnly) {{
    results = results.filter(p => p.is_featured);
  }}
  return results;
}}

export async function getProductBySlug(slug: string): Promise<Product | null> {{
  if (isSupabaseConfigured) {{
    try {{
      const {{ data, error }} = await supabase.from('products').select('*').eq('slug', slug).single();
      if (!error && data) return data as Product;
    }} catch (e) {{
      console.warn('Supabase product slug fetch failed, using fallback mock data:', e);
    }}
  }}
  return mockProducts.find(p => p.slug === slug) || null;
}}
"""

with open("c:/Users/jeeva/OneDrive/Documents/JDJ/rainbow-enterprises/src/lib/mockData.ts", "w", encoding="utf-8") as f:
    f.write(ts_file_content)

print("Data generation complete. seed.sql and mockData.ts updated.")
