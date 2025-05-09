import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";
import { Tables } from "@/lib/supabase";

type Product = Tables["products"];

interface CategorySectionProps {
  category: string;
  products: Product[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  products,
}) => {
  const { width } = useWindowDimensions();
  const numColumns = width > 768 ? 2 : 2; // We can adjust this based on screen size

  return (
    <Box className="mb-6">
      <Box className="mb-3">
        <Badge variant="solid" action="success" size="md">
          <Text className="text-white font-medium">{category}</Text>
        </Badge>
      </Box>

      <FlatList
        data={products}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box
            style={{
              flex: 1,
              margin: 4,
              width: `${100 / numColumns}%`,
            }}
          >
            <ProductCard product={item} />
          </Box>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </Box>
  );
};
