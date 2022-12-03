export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          name: string | null
          image: string | null
          content: string | null
          release_date: string | null
          author: string | null
          id: string
          created_at: string | null
        }
        Insert: {
          name?: string | null
          image?: string | null
          content?: string | null
          release_date?: string | null
          author?: string | null
          id?: string
          created_at?: string | null
        }
        Update: {
          name?: string | null
          image?: string | null
          content?: string | null
          release_date?: string | null
          author?: string | null
          id?: string
          created_at?: string | null
        }
      }
      basket: {
        Row: {
          client_id: string | null
          id: string
          created_at: string | null
          status: string | null
        }
        Insert: {
          client_id?: string | null
          id?: string
          created_at?: string | null
          status?: string | null
        }
        Update: {
          client_id?: string | null
          id?: string
          created_at?: string | null
          status?: string | null
        }
      }
      basket_has_disclaimers: {
        Row: {
          created_at: string | null
          disclaimer: string
          status: boolean | null
          basket: string
        }
        Insert: {
          created_at?: string | null
          disclaimer: string
          status?: boolean | null
          basket: string
        }
        Update: {
          created_at?: string | null
          disclaimer?: string
          status?: boolean | null
          basket?: string
        }
      }
      basket_has_services: {
        Row: {
          basket_id: string
          service_id: string
          created_at: string | null
        }
        Insert: {
          basket_id: string
          service_id: string
          created_at?: string | null
        }
        Update: {
          basket_id?: string
          service_id?: string
          created_at?: string | null
        }
      }
      basket_status: {
        Row: {
          value: string
          id: string
          created_at: string | null
        }
        Insert: {
          value: string
          id?: string
          created_at?: string | null
        }
        Update: {
          value?: string
          id?: string
          created_at?: string | null
        }
      }
      business_info: {
        Row: {
          name: string | null
          email: string | null
          phone: string | null
          id: string
          created_at: string | null
          show: boolean | null
        }
        Insert: {
          name?: string | null
          email?: string | null
          phone?: string | null
          id?: string
          created_at?: string | null
          show?: boolean | null
        }
        Update: {
          name?: string | null
          email?: string | null
          phone?: string | null
          id?: string
          created_at?: string | null
          show?: boolean | null
        }
      }
      campaign_has_services: {
        Row: {
          campaign_id: string
          service_id: string
          created_at: string | null
        }
        Insert: {
          campaign_id: string
          service_id: string
          created_at?: string | null
        }
        Update: {
          campaign_id?: string
          service_id?: string
          created_at?: string | null
        }
      }
      campaigns: {
        Row: {
          start_date: string
          end_date: string
          value: number
          name: string | null
          description: string | null
          id: string
          created_at: string | null
        }
        Insert: {
          start_date: string
          end_date: string
          value: number
          name?: string | null
          description?: string | null
          id?: string
          created_at?: string | null
        }
        Update: {
          start_date?: string
          end_date?: string
          value?: number
          name?: string | null
          description?: string | null
          id?: string
          created_at?: string | null
        }
      }
      category: {
        Row: {
          category_name: string
          id: string
          created_at: string | null
        }
        Insert: {
          category_name: string
          id?: string
          created_at?: string | null
        }
        Update: {
          category_name?: string
          id?: string
          created_at?: string | null
        }
      }
      clients: {
        Row: {
          last_name: string
          phone: string
          email: string
          last_visit: string | null
          referred_by: string | null
          id: string
          created_at: string | null
          role: string
          user_status: string
          first_name: string
        }
        Insert: {
          last_name: string
          phone: string
          email: string
          last_visit?: string | null
          referred_by?: string | null
          id?: string
          created_at?: string | null
          role?: string
          user_status?: string
          first_name: string
        }
        Update: {
          last_name?: string
          phone?: string
          email?: string
          last_visit?: string | null
          referred_by?: string | null
          id?: string
          created_at?: string | null
          role?: string
          user_status?: string
          first_name?: string
        }
      }
      comments: {
        Row: {
          content: string
          comment_id: string | null
          client_id: string
          service_id: string | null
          id: string
          created_at: string | null
        }
        Insert: {
          content: string
          comment_id?: string | null
          client_id: string
          service_id?: string | null
          id?: string
          created_at?: string | null
        }
        Update: {
          content?: string
          comment_id?: string | null
          client_id?: string
          service_id?: string | null
          id?: string
          created_at?: string | null
        }
      }
      disclaimers: {
        Row: {
          id: string
          created_at: string | null
          name: string
          description: string
          section: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name: string
          description: string
          section?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string
          description?: string
          section?: string | null
        }
      }
      image_has_likes: {
        Row: {
          client_id: string
          image_id: string
          created_at: string | null
          liked: boolean
        }
        Insert: {
          client_id: string
          image_id: string
          created_at?: string | null
          liked?: boolean
        }
        Update: {
          client_id?: string
          image_id?: string
          created_at?: string | null
          liked?: boolean
        }
      }
      images: {
        Row: {
          gallery: boolean | null
          carousel: boolean | null
          url: string
          name: string | null
          id: string
          created_at: string | null
          show_main: boolean | null
        }
        Insert: {
          gallery?: boolean | null
          carousel?: boolean | null
          url: string
          name?: string | null
          id?: string
          created_at?: string | null
          show_main?: boolean | null
        }
        Update: {
          gallery?: boolean | null
          carousel?: boolean | null
          url?: string
          name?: string | null
          id?: string
          created_at?: string | null
          show_main?: boolean | null
        }
      }
      message: {
        Row: {
          id: string
          email: string
          phone: string | null
          content: string
          name: string | null
          created_at: string | null
          replied: boolean
        }
        Insert: {
          id: string
          email: string
          phone?: string | null
          content: string
          name?: string | null
          created_at?: string | null
          replied?: boolean
        }
        Update: {
          id?: string
          email?: string
          phone?: string | null
          content?: string
          name?: string | null
          created_at?: string | null
          replied?: boolean
        }
      }
      order_status: {
        Row: {
          order_status: string
          id: string
          created_at: string | null
        }
        Insert: {
          order_status: string
          id?: string
          created_at?: string | null
        }
        Update: {
          order_status?: string
          id?: string
          created_at?: string | null
        }
      }
      orders: {
        Row: {
          order_status: string | null
          start: string | null
          duration: number | null
          client_id: string | null
          basket: string
          voucher: string | null
          campaign: string | null
          id: string
          created_at: string | null
          value: number | null
          end: string | null
        }
        Insert: {
          order_status?: string | null
          start?: string | null
          duration?: number | null
          client_id?: string | null
          basket: string
          voucher?: string | null
          campaign?: string | null
          id?: string
          created_at?: string | null
          value?: number | null
          end?: string | null
        }
        Update: {
          order_status?: string | null
          start?: string | null
          duration?: number | null
          client_id?: string | null
          basket?: string
          voucher?: string | null
          campaign?: string | null
          id?: string
          created_at?: string | null
          value?: number | null
          end?: string | null
        }
      }
      page_has_articles: {
        Row: {
          page_id: string
          article_id: string
          index: number | null
        }
        Insert: {
          page_id: string
          article_id: string
          index?: number | null
        }
        Update: {
          page_id?: string
          article_id?: string
          index?: number | null
        }
      }
      pages: {
        Row: {
          name: string | null
          title: string | null
          background: string | null
          sub_header: string | null
          support_text: string | null
          id: string
          created_at: string | null
        }
        Insert: {
          name?: string | null
          title?: string | null
          background?: string | null
          sub_header?: string | null
          support_text?: string | null
          id?: string
          created_at?: string | null
        }
        Update: {
          name?: string | null
          title?: string | null
          background?: string | null
          sub_header?: string | null
          support_text?: string | null
          id?: string
          created_at?: string | null
        }
      }
      ratings: {
        Row: {
          service_id: string
          value: number | null
          client_id: string
          created_at: string | null
        }
        Insert: {
          service_id: string
          value?: number | null
          client_id: string
          created_at?: string | null
        }
        Update: {
          service_id?: string
          value?: number | null
          client_id?: string
          created_at?: string | null
        }
      }
      roles: {
        Row: {
          id: string
          role: string
        }
        Insert: {
          id?: string
          role?: string
        }
        Update: {
          id?: string
          role?: string
        }
      }
      service_has_compatible_services: {
        Row: {
          service_id: string
          compatible_services: string | null
          created_at: string | null
        }
        Insert: {
          service_id: string
          compatible_services?: string | null
          created_at?: string | null
        }
        Update: {
          service_id?: string
          compatible_services?: string | null
          created_at?: string | null
        }
      }
      service_has_images: {
        Row: {
          service_id: string
          image_id: string
          index: number | null
          created_at: string | null
          show: boolean | null
        }
        Insert: {
          service_id: string
          image_id: string
          index?: number | null
          created_at?: string | null
          show?: boolean | null
        }
        Update: {
          service_id?: string
          image_id?: string
          index?: number | null
          created_at?: string | null
          show?: boolean | null
        }
      }
      services: {
        Row: {
          type: number
          image: string | null
          name: string
          description: string | null
          duration: number | null
          price: number | null
          category: string | null
          id: string
          created_at: string | null
        }
        Insert: {
          type?: number
          image?: string | null
          name: string
          description?: string | null
          duration?: number | null
          price?: number | null
          category?: string | null
          id?: string
          created_at?: string | null
        }
        Update: {
          type?: number
          image?: string | null
          name?: string
          description?: string | null
          duration?: number | null
          price?: number | null
          category?: string | null
          id?: string
          created_at?: string | null
        }
      }
      special_days: {
        Row: {
          date: string | null
          start_hours: string
          end_hours: string
          id: string
          open: boolean
        }
        Insert: {
          date?: string | null
          start_hours: string
          end_hours: string
          id?: string
          open?: boolean
        }
        Update: {
          date?: string | null
          start_hours?: string
          end_hours?: string
          id?: string
          open?: boolean
        }
      }
      testimonials: {
        Row: {
          content: string
          show: boolean
          client: string
          id: string
          created_at: string | null
        }
        Insert: {
          content: string
          show: boolean
          client: string
          id?: string
          created_at?: string | null
        }
        Update: {
          content?: string
          show?: boolean
          client?: string
          id?: string
          created_at?: string | null
        }
      }
      user_status: {
        Row: {
          id: string
          user_status: string
        }
        Insert: {
          id?: string
          user_status?: string
        }
        Update: {
          id?: string
          user_status?: string
        }
      }
      voucher: {
        Row: {
          voucher_name: string | null
          value: number
          start_date: string
          end_date: string
          client_id: string
          id: string
          created_at: string | null
        }
        Insert: {
          voucher_name?: string | null
          value: number
          start_date: string
          end_date: string
          client_id: string
          id?: string
          created_at?: string | null
        }
        Update: {
          voucher_name?: string | null
          value?: number
          start_date?: string
          end_date?: string
          client_id?: string
          id?: string
          created_at?: string | null
        }
      }
      working_hours: {
        Row: {
          id: string
          day: string
          start_hour: string
          end_hours: string
          open: boolean
        }
        Insert: {
          id: string
          day: string
          start_hour: string
          end_hours: string
          open?: boolean
        }
        Update: {
          id?: string
          day?: string
          start_hour?: string
          end_hours?: string
          open?: boolean
        }
      }
    }
    Views: {
      basketview: {
        Row: {
          name: string | null
          price: number | null
          duration: number | null
          service_id: string | null
          type: number | null
          basket_id: string | null
          client_id: string | null
          last_name: string | null
          first_name: string | null
          phone: string | null
          email: string | null
          basket_status: string | null
        }
      }
      clientview: {
        Row: {
          id: string | null
          phone: string | null
          email: string | null
          first_name: string | null
          last_name: string | null
          role: string | null
          user_status: string | null
        }
      }
      imagecarousel: {
        Row: {
          id: string | null
          created_at: string | null
          url: string | null
          name: string | null
          show_main: boolean | null
          gallery: boolean | null
          carousel: boolean | null
        }
        Insert: {
          id?: string | null
          created_at?: string | null
          url?: string | null
          name?: string | null
          show_main?: boolean | null
          gallery?: boolean | null
          carousel?: boolean | null
        }
        Update: {
          id?: string | null
          created_at?: string | null
          url?: string | null
          name?: string | null
          show_main?: boolean | null
          gallery?: boolean | null
          carousel?: boolean | null
        }
      }
      imagegallery: {
        Row: {
          id: string | null
          created_at: string | null
          url: string | null
          name: string | null
          show_main: boolean | null
          gallery: boolean | null
          carousel: boolean | null
        }
        Insert: {
          id?: string | null
          created_at?: string | null
          url?: string | null
          name?: string | null
          show_main?: boolean | null
          gallery?: boolean | null
          carousel?: boolean | null
        }
        Update: {
          id?: string | null
          created_at?: string | null
          url?: string | null
          name?: string | null
          show_main?: boolean | null
          gallery?: boolean | null
          carousel?: boolean | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

