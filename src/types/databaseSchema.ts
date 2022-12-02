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
          id: string
          created_at: string | null
          name: string | null
          image: string | null
          content: string | null
          release_date: string | null
          author: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          image?: string | null
          content?: string | null
          release_date?: string | null
          author?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          image?: string | null
          content?: string | null
          release_date?: string | null
          author?: string | null
        }
      }
      basket: {
        Row: {
          id: string
          created_at: string | null
          status: string | null
          client_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          status?: string | null
          client_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          status?: string | null
          client_id?: string | null
        }
      }
      basket_has_disclaimers: {
        Row: {
          basket: string
          created_at: string | null
          disclaimer: string
          status: boolean | null
        }
        Insert: {
          basket: string
          created_at?: string | null
          disclaimer: string
          status?: boolean | null
        }
        Update: {
          basket?: string
          created_at?: string | null
          disclaimer?: string
          status?: boolean | null
        }
      }
      basket_has_services: {
        Row: {
          basket_id: string
          created_at: string | null
          service_id: string
        }
        Insert: {
          basket_id: string
          created_at?: string | null
          service_id: string
        }
        Update: {
          basket_id?: string
          created_at?: string | null
          service_id?: string
        }
      }
      basket_status: {
        Row: {
          id: string
          created_at: string | null
          value: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          value: string
        }
        Update: {
          id?: string
          created_at?: string | null
          value?: string
        }
      }
      business_info: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          email: string | null
          phone: string | null
          show: boolean | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          email?: string | null
          phone?: string | null
          show?: boolean | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          email?: string | null
          phone?: string | null
          show?: boolean | null
        }
      }
      campaign_has_services: {
        Row: {
          campaign_id: string
          created_at: string | null
          service_id: string
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          service_id: string
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          service_id?: string
        }
      }
      campaigns: {
        Row: {
          id: string
          created_at: string | null
          start_date: string
          end_date: string
          value: number
          name: string | null
          description: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          start_date: string
          end_date: string
          value: number
          name?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          start_date?: string
          end_date?: string
          value?: number
          name?: string | null
          description?: string | null
        }
      }
      category: {
        Row: {
          id: string
          created_at: string | null
          category_name: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          category_name: string
        }
        Update: {
          id?: string
          created_at?: string | null
          category_name?: string
        }
      }
      clients: {
        Row: {
          id: string
          created_at: string | null
          first_name: string
          phone: string
          email: string
          last_visit: string | null
          role: string
          user_status: string
          referred_by: string | null
          last_name: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          first_name: string
          phone: string
          email: string
          last_visit?: string | null
          role?: string
          user_status?: string
          referred_by?: string | null
          last_name: string
        }
        Update: {
          id?: string
          created_at?: string | null
          first_name?: string
          phone?: string
          email?: string
          last_visit?: string | null
          role?: string
          user_status?: string
          referred_by?: string | null
          last_name?: string
        }
      }
      comments: {
        Row: {
          id: string
          created_at: string | null
          content: string
          comment_id: string | null
          client_id: string
          service_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          content: string
          comment_id?: string | null
          client_id: string
          service_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          content?: string
          comment_id?: string | null
          client_id?: string
          service_id?: string | null
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
          created_at: string | null
          image_id: string
          liked: boolean
        }
        Insert: {
          client_id: string
          created_at?: string | null
          image_id: string
          liked?: boolean
        }
        Update: {
          client_id?: string
          created_at?: string | null
          image_id?: string
          liked?: boolean
        }
      }
      images: {
        Row: {
          id: string
          created_at: string | null
          url: string
          name: string | null
          show_main: boolean | null
          gallery: boolean | null
          carousel: boolean | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          url: string
          name?: string | null
          show_main?: boolean | null
          gallery?: boolean | null
          carousel?: boolean | null
        }
        Update: {
          id?: string
          created_at?: string | null
          url?: string
          name?: string | null
          show_main?: boolean | null
          gallery?: boolean | null
          carousel?: boolean | null
        }
      }
      message: {
        Row: {
          id: string
          created_at: string | null
          email: string
          phone: string | null
          content: string
          name: string | null
          replied: boolean
        }
        Insert: {
          id: string
          created_at?: string | null
          email: string
          phone?: string | null
          content: string
          name?: string | null
          replied?: boolean
        }
        Update: {
          id?: string
          created_at?: string | null
          email?: string
          phone?: string | null
          content?: string
          name?: string | null
          replied?: boolean
        }
      }
      order_status: {
        Row: {
          id: string
          created_at: string | null
          order_status: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          order_status: string
        }
        Update: {
          id?: string
          created_at?: string | null
          order_status?: string
        }
      }
      orders: {
        Row: {
          id: string
          created_at: string | null
          client_id: string | null
          basket: string
          order_status: string | null
          voucher: string | null
          campaign: string | null
          value: number | null
          start: string
          end: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          client_id?: string | null
          basket: string
          order_status?: string | null
          voucher?: string | null
          campaign?: string | null
          value?: number | null
          start: string
          end: string
        }
        Update: {
          id?: string
          created_at?: string | null
          client_id?: string | null
          basket?: string
          order_status?: string | null
          voucher?: string | null
          campaign?: string | null
          value?: number | null
          start?: string
          end?: string
        }
      }
      page_has_articles: {
        Row: {
          page_id: string
          index: number | null
          article_id: string
        }
        Insert: {
          page_id: string
          index?: number | null
          article_id: string
        }
        Update: {
          page_id?: string
          index?: number | null
          article_id?: string
        }
      }
      pages: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          title: string | null
          background: string | null
          sub_header: string | null
          support_text: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          title?: string | null
          background?: string | null
          sub_header?: string | null
          support_text?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          title?: string | null
          background?: string | null
          sub_header?: string | null
          support_text?: string | null
        }
      }
      ratings: {
        Row: {
          service_id: string
          created_at: string | null
          value: number | null
          client_id: string
        }
        Insert: {
          service_id: string
          created_at?: string | null
          value?: number | null
          client_id: string
        }
        Update: {
          service_id?: string
          created_at?: string | null
          value?: number | null
          client_id?: string
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
          created_at: string | null
          image_id: string
          index: number | null
          show: boolean | null
        }
        Insert: {
          service_id: string
          created_at?: string | null
          image_id: string
          index?: number | null
          show?: boolean | null
        }
        Update: {
          service_id?: string
          created_at?: string | null
          image_id?: string
          index?: number | null
          show?: boolean | null
        }
      }
      services: {
        Row: {
          id: string
          created_at: string | null
          name: string
          description: string | null
          duration: number | null
          price: number | null
          image: string | null
          category: string | null
          type: number
        }
        Insert: {
          id?: string
          created_at?: string | null
          name: string
          description?: string | null
          duration?: number | null
          price?: number | null
          image?: string | null
          category?: string | null
          type?: number
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string
          description?: string | null
          duration?: number | null
          price?: number | null
          image?: string | null
          category?: string | null
          type?: number
        }
      }
      special_days: {
        Row: {
          id: string
          date: string | null
          start_hours: string
          end_hours: string
          open: boolean
        }
        Insert: {
          id?: string
          date?: string | null
          start_hours: string
          end_hours: string
          open?: boolean
        }
        Update: {
          id?: string
          date?: string | null
          start_hours?: string
          end_hours?: string
          open?: boolean
        }
      }
      testimonials: {
        Row: {
          id: string
          created_at: string | null
          content: string
          show: boolean
          client: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          content: string
          show: boolean
          client: string
        }
        Update: {
          id?: string
          created_at?: string | null
          content?: string
          show?: boolean
          client?: string
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
          id: string
          created_at: string | null
          voucher_name: string | null
          value: number
          start_date: string
          end_date: string
          client_id: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          voucher_name?: string | null
          value: number
          start_date: string
          end_date: string
          client_id: string
        }
        Update: {
          id?: string
          created_at?: string | null
          voucher_name?: string | null
          value?: number
          start_date?: string
          end_date?: string
          client_id?: string
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

