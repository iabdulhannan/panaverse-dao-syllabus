export interface DropdownData {
  title: string;
  items: Array<{
    courseName: string,
    subtitle: string
    linkTo: string;
  }>,
}

export interface CourseCardType {
  courseID: string;
  image: any;
  title: string;
  description: string;
  linkTo: string
  isCore?: boolean;
  quarter?: string;
}

export interface CourseQuarter {
  quarterNumber: number;
  duration: string;
  title: string;
  description: string;
  isCore: boolean,
  syllabus: Array<
    {
      title: string;
    }
  >
}
