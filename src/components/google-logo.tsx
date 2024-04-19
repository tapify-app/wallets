"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateAppleWallet, updateGoogleWallet } from "@/lib/actions";
import { GoogleWallet } from "@/db/schema";
import axios from "axios";

export const formSchema = z.object({
  company_name: z.string().min(2, {
    message: "company_name must be at least 2 characters.",
  }),
  text_color: z.string().min(5, {
    message: "text_color must be at least 2 characters.",
  }),
  card_color: z.string().min(5, {
    message: "card_color must be at least 2 characters.",
  }),
  strip_url: z.string().min(5, {
    message: "strip_url must be at least 2 characters.",
  }),
  logo_url: z.string().min(5, {
    message: "logo_url must be at least 2 characters.",
  }),
  name: z.string().min(5, {
    message: "name must be at least 2 characters.",
  }),
  designation: z.string().min(5, {
    message: "designation must be at least 2 characters.",
  }),
  qr_value: z.string().min(5, {
    message: "qr_value must be at least 2 characters.",
  }),
  icon_url: z.string().min(5, {
    message: "icon_url must be at least 2 characters.",
  }),
});

type Inputs = z.infer<typeof formSchema>;

interface ProfileFormProps {
  tempId: string;
  data?: GoogleWallet;
}

export function GoogleLogo({ tempId, data }: ProfileFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: data?.company_name,
      card_color: data?.card_color,
      text_color: data?.text_color,
      logo_url: data?.logo_url,
      strip_url: data?.strip_url,
      name: data?.name,
      designation: data?.designation,
      qr_value: data?.qr_value,
      icon_url: data?.icon_url,
    },
  });

  async function onSubmit(formData: Inputs) {
    try {
      setIsLoading(true);
      await axios.post(
        "https://bbe5-2402-a00-162-371c-5403-9967-26fa-b1c2.ngrok-free.app/template/google-wallet",
        {
          ...formData,
          templates_id: tempId,
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[350px]"
      >
        <FormField
          control={form.control}
          name="card_color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Color</FormLabel>
              <FormControl>
                <Input placeholder="color hex" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text_color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>text color</FormLabel>
              <FormControl>
                <Input placeholder="text color hex" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo color</FormLabel>
              <FormControl>
                <Input placeholder="Logo url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="strip_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>strip url</FormLabel>
              <FormControl>
                <Input placeholder="strip_url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation</FormLabel>
              <FormControl>
                <Input placeholder="Designation" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="qr_value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>QR Value</FormLabel>
              <FormControl>
                <Input placeholder="QR Value" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icon_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon Url</FormLabel>
              <FormControl>
                <Input placeholder="Icon Url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Compnay name</FormLabel>
              <FormControl>
                <Input placeholder="company_name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
