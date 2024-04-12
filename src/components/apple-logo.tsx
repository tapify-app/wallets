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

const formSchema = z.object({
  company_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  text_color: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  card_color: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
})

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
      card_color: data.card_color!,
      text_color: data.text_color!,
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
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder="hex color" {...field} />
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
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder="hex color" {...field} />
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
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
