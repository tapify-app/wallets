"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { updateAppleWallet } from "@/lib/actions"
import { AppleWallet } from "@/db/schema"
import { formSchema } from "./google-logo"

type Inputs = z.infer<typeof formSchema>

interface ProfileFormProps {
  data: AppleWallet
}

export function AppleLogo({ data }: ProfileFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: data.company_name,
      card_color: data.card_color,
      text_color: data.text_color,
    },
  })

  async function onSubmit(formData: Inputs) {
    try {
      setIsLoading(true)
      await updateAppleWallet({
        data: {
          company_name: formData.company_name,
          templates_id: data.templates_id,
          card_color: formData.card_color,
          text_color: formData.text_color,
          logo_url: formData.logo_url,
          strip_url: formData.strip_url,
        },
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
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
  )
}
