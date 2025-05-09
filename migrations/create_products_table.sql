-- Create products table
CREATE TABLE IF NOT EXISTS "products" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "description" TEXT,
  "image_url" TEXT,
  "amazon_url" TEXT,
  "category" TEXT,
  "tags" TEXT[] DEFAULT '{}',
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on category for faster filtering
CREATE INDEX IF NOT EXISTS "products_category_idx" ON "products" ("category");

-- Create an RLS policy to allow public read access
ALTER TABLE "products" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON "products" FOR SELECT USING (true);

-- Insert sample data
INSERT INTO "products" (title, description, image_url, amazon_url, category, tags)
VALUES
  (
    'Minimalist Coffee Maker', 
    'A sleek, modern coffee maker that brews the perfect cup every time.', 
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
    'https://www.amazon.com/sample-product', 
    'Kitchen',
    ARRAY['minimalist', 'coffee', 'modern']
  ),
  (
    'Wireless Earbuds', 
    'Premium wireless earbuds with noise cancellation and long battery life.', 
    'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46',
    'https://www.amazon.com/sample-product', 
    'Tech',
    ARRAY['wireless', 'audio', 'portable']
  ),
  (
    'Compact Travel Backpack', 
    'Lightweight yet spacious backpack perfect for weekend getaways.', 
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    'https://www.amazon.com/sample-product', 
    'Travel',
    ARRAY['backpack', 'lightweight', 'compact']
  ),
  (
    'Smart Water Bottle', 
    'Tracks your hydration and reminds you when to drink water.', 
    'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b',
    'https://www.amazon.com/sample-product', 
    'Tech',
    ARRAY['smart', 'hydration', 'health']
  ),
  (
    'Bamboo Cutting Board', 
    'Eco-friendly bamboo cutting board with juice groove.', 
    'https://images.unsplash.com/photo-1619566636858-adf3ef46400b',
    'https://www.amazon.com/sample-product', 
    'Kitchen',
    ARRAY['eco-friendly', 'bamboo', 'kitchen']
  ),
  (
    'Packing Cubes Set', 
    'Set of 6 compression packing cubes for organized travel.', 
    'https://images.unsplash.com/photo-1581553680321-4fffae59fcf3',
    'https://www.amazon.com/sample-product', 
    'Travel',
    ARRAY['organization', 'packing', 'travel']
  ); 