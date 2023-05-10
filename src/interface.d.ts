export interface Course {
  idx: number;
  price: number;
  real_price: number | null;
  rating: number;
  num_reviews: number;
  num_published_lectures: number;
  title: string;
  image_240x135: string;
  headline: string;
  content_info: string;
  instructional_level: string;
  badge_text?: string;
  visible_instructors: string[];
}

export interface ContentCourse {
  title: string;
  time: string;
  type: number;
}
export interface Content {
  title: string;
  count: number;
  duration: number;
  courses: ContentCourse[];
}
