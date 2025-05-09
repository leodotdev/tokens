import React from "react";
import { Linking } from "react-native";
import { Box } from "@/components/ui/box";
import { Image as ExpoImage } from "expo-image";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { cssInterop } from "nativewind";
import { Tables } from "@/lib/supabase";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";

// CSS interop for ExpoImage
cssInterop(ExpoImage, { className: "style" });

type Product = Tables["products"];

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleOpenAmazon = () => {
    if (product.amazon_url) {
      Linking.openURL(product.amazon_url);
    }
  };

  return (
    <Pressable
      onPress={handleOpenAmazon}
      className="bg-zinc-50 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-sm p-3 mb-3 h-full border border-zinc-200 dark:border-zinc-700"
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
    >
      <VStack space="md" className="h-full">
        <Box className="w-full aspect-square rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          {product.image_url && (
            <ExpoImage
              source={{ uri: product.image_url }}
              className="w-full h-full"
              contentFit="cover"
              alt={product.title}
              transition={500}
            />
          )}
        </Box>

        <VStack space="xs" className="flex-1">
          <Text
            className="text-zinc-900 dark:text-zinc-100 font-medium text-lg"
            numberOfLines={1}
          >
            {product.title}
          </Text>

          {product.tags && product.tags.length > 0 && (
            <Box className="flex flex-row flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="outline" action="muted" size="sm">
                  <Text size="2xs" className="text-zinc-500 dark:text-zinc-400">
                    {tag}
                  </Text>
                </Badge>
              ))}
              {product.tags.length > 2 && (
                <Badge variant="outline" action="muted" size="sm">
                  <Text size="2xs" className="text-zinc-500 dark:text-zinc-400">
                    +{product.tags.length - 2}
                  </Text>
                </Badge>
              )}
            </Box>
          )}

          <Text
            className="text-zinc-500 dark:text-zinc-400 text-xs mt-1"
            numberOfLines={1}
          >
            {product.category}
          </Text>
        </VStack>
      </VStack>
    </Pressable>
  );
};
