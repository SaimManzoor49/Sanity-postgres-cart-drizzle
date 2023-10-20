import { defineType, defineField } from "sanity";

export const ProductSchema = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});
