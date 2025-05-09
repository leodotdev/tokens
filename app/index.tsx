import React, { useContext, useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { cssInterop } from "nativewind";
import { ColorModeContext } from "./_layout";
import { Spinner } from "@/components/ui/spinner";
import { Alert } from "@/components/ui/alert";
import { AlertIcon } from "@/components/ui/alert";
import {
  InfoIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  Icon,
} from "@/components/ui/icon";
import { ProductCard } from "@/components/custom/ProductCard";
import { supabase, Tables } from "@/lib/supabase";
import { FlatList, useWindowDimensions, TouchableOpacity } from "react-native";
import { Input } from "@/components/ui/input";
import { InputField } from "@/components/ui/input";
import { InputIcon } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeText } from "@/components/ui/badge";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Popover } from "@/components/ui/popover";
import { PopoverBackdrop } from "@/components/ui/popover";
import { PopoverContent } from "@/components/ui/popover";
import { PopoverHeader } from "@/components/ui/popover";
import { PopoverBody } from "@/components/ui/popover";
import { PopoverFooter } from "@/components/ui/popover";
import { PopoverCloseButton } from "@/components/ui/popover";
import { ScrollView } from "@/components/ui/scroll-view";

cssInterop(SafeAreaView, { className: "style" });

type Product = Tables["products"];

export default function HomeScreen() {
  const { colorMode, setColorMode }: any = useContext(ColorModeContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Determine number of columns based on screen width
  const numColumns = width > 768 ? 3 : 2;

  // Fetch products from Supabase
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          throw error;
        }

        setProducts(data || []);
        setFilteredProducts(data || []);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data?.map((product) => product.category).filter(Boolean))
        ) as string[];

        setCategories(uniqueCategories);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching products");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter products based on search query and selected category
  useEffect(() => {
    let result = products;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query) ||
          product.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, products]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    if (setColorMode) {
      setColorMode(colorMode === "light" ? "dark" : "light");
    }
  };

  // Render the ProductCards inside the list
  const renderProductItem = ({ item }: { item: Product }) => (
    <Box
      style={{
        flex: 1,
        padding: 8,
        width: `${100 / numColumns}%`,
      }}
    >
      <ProductCard product={item} />
    </Box>
  );

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-zinc-100 dark:bg-zinc-900 relative">
      <VStack
        space="md"
        className="bg-zinc-200 dark:bg-zinc-800 py-4 px-4 border-b border-zinc-300 dark:border-zinc-700"
      >
        <Box className="flex flex-row justify-between items-center">
          <Heading className="text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-100">
            Tokens App
          </Heading>

          <Popover
            trigger={(triggerProps) => (
              <Button
                variant="outline"
                action="secondary"
                size="sm"
                {...triggerProps}
                onPress={() => setIsSettingsOpen(true)}
                className="bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600"
              >
                <ButtonText className="text-zinc-800 dark:text-zinc-200">
                  Settings
                </ButtonText>
                <Icon
                  as={ChevronDownIcon}
                  size="sm"
                  className="text-zinc-800 dark:text-zinc-200 ml-1"
                />
              </Button>
            )}
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
          >
            <PopoverBackdrop />
            <PopoverContent className="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700">
              <PopoverHeader className="border-b border-zinc-300 dark:border-zinc-700">
                <Text className="text-zinc-900 dark:text-zinc-100 font-medium">
                  Settings
                </Text>
              </PopoverHeader>
              <PopoverBody>
                <Box>
                  <TouchableOpacity onPress={toggleTheme}>
                    <Box className="flex flex-row items-center py-2">
                      <Icon
                        as={colorMode === "light" ? SunIcon : MoonIcon}
                        size="md"
                        className="text-zinc-800 dark:text-zinc-200 mr-3"
                      />
                      <Text className="text-zinc-900 dark:text-zinc-100">
                        {colorMode === "light" ? "Light Mode" : "Dark Mode"}
                      </Text>
                    </Box>
                  </TouchableOpacity>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>

        <Input
          variant="outline"
          size="md"
          className="bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600"
        >
          <InputField
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search products..."
            className="text-zinc-900 dark:text-zinc-100"
            placeholderTextColor={colorMode === "dark" ? "#a1a1aa" : "#71717a"}
          />
          <InputIcon className="text-zinc-500 dark:text-zinc-400">
            <Icon as={SearchIcon} />
          </InputIcon>
        </Input>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="xs" className="py-1">
            <Button
              variant={selectedCategory === null ? "solid" : "outline"}
              action={selectedCategory === null ? "primary" : "secondary"}
              size="xs"
              onPress={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? "bg-zinc-700 dark:bg-zinc-200"
                  : "bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600"
              }
            >
              <ButtonText
                className={
                  selectedCategory === null
                    ? "text-zinc-100 dark:text-zinc-900"
                    : "text-zinc-800 dark:text-zinc-200"
                }
              >
                All
              </ButtonText>
            </Button>

            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "solid" : "outline"}
                action={selectedCategory === category ? "primary" : "secondary"}
                size="xs"
                onPress={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-zinc-700 dark:bg-zinc-200"
                    : "bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600"
                }
              >
                <ButtonText
                  className={
                    selectedCategory === category
                      ? "text-zinc-100 dark:text-zinc-900"
                      : "text-zinc-800 dark:text-zinc-200"
                  }
                >
                  {category}
                </ButtonText>
              </Button>
            ))}
          </HStack>
        </ScrollView>

        {(searchQuery || selectedCategory) && (
          <Box className="flex flex-row justify-between items-center">
            <Text className="text-xs text-zinc-500 dark:text-zinc-400">
              {filteredProducts.length} products found
            </Text>
            <Button
              variant="link"
              action="secondary"
              size="xs"
              onPress={resetFilters}
            >
              <ButtonText className="text-zinc-500 dark:text-zinc-400">
                Reset filters
              </ButtonText>
            </Button>
          </Box>
        )}
      </VStack>

      <Box className="flex-1">
        {loading ? (
          <Box className="flex items-center justify-center py-10">
            <Spinner
              size="large"
              className="text-zinc-600 dark:text-zinc-400"
            />
            <Text className="mt-4 text-zinc-600 dark:text-zinc-400">
              Loading products...
            </Text>
          </Box>
        ) : error ? (
          <Box className="p-4">
            <Alert action="error" className="mb-4 bg-red-100 dark:bg-red-900">
              <AlertIcon as={InfoIcon} />
              <Text className="text-red-700 dark:text-red-200">{error}</Text>
            </Alert>
          </Box>
        ) : filteredProducts.length === 0 ? (
          <Box className="p-4">
            <Alert action="info" className="mb-4 bg-blue-100 dark:bg-blue-900">
              <AlertIcon as={InfoIcon} />
              <Text className="text-blue-700 dark:text-blue-200">
                No products found. Try adjusting your filters.
              </Text>
            </Alert>
          </Box>
        ) : (
          <FlatList
            key={`grid-${numColumns}`} // Key changes when columns change, forcing complete re-render
            data={filteredProducts}
            numColumns={numColumns}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 12 }}
            renderItem={renderProductItem}
            style={{
              backgroundColor: colorMode === "dark" ? "#18181b" : "#f4f4f5",
            }} // zinc-900 or zinc-100
          />
        )}
      </Box>
    </SafeAreaView>
  );
}
