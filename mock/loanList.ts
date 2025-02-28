import { Request, Response } from 'express';
const dataMock = [
  {
    uuid: 1,
    name: 'Nguyễn Văn A',
    end_date: '22/02/2025',
    quantity: 10,
    link: 'https://www.google.com',
    created_by: 'domo@domo.com.vn',
    status: 1,
    contents: [
      {
        id: 1,
        full_name: 'Nguyễn Văn A',
        phone: '0987654321',
        email: 'nguyenvana@gmail.com',
        experience: '1 năm',
        interview_time: '12/02/2025',
        created_at: '12/02/2025',
        status: 'Phù hợp',
        sync_order_form: 'https://pdfobject.com/pdf/sample.pdf',
        experiences: [
          {
            id: 1,
            name: 'Công ty A',
            description: 'Mô tả kinh nghiệm',
            years_of_experience: '3',
            start_year: '2019',
            end_year: '2021',
          },
          {
            id: 2,
            name: 'Công ty B',
            description: 'Mô tả kinh nghiệm',
            years_of_experience: '3',
            start_year: '2021',
            end_year: '2024',
          },
        ],
      },
      {
        id: 2,
        full_name: 'Nguyễn Văn B',
        phone: '0987654321',
        email: 'nguyenvanb@gmail.com',
        experience: '1 năm',
        interview_time: '12/02/2025',
        created_at: '12/02/2025',
        status: 'Chưa phù hợp',
        experiences: [
          {
            id: 1,
            name: 'Công ty X',
            description: 'Mô tả kinh nghiệm',
            years_of_experience: '3',
            start_year: '2018',
            end_year: '2025',
          },
        ],
      },
    ],
  },
  {
    uuid: 2,
    name: 'Nguyễn Văn B',
    end_date: '11/02/2025',
    quantity: 10,
    link: 'https://www.google.com',
    created_by: 'domo@domo.com.vn',
    status: 1,
  },
  {
    uuid: 3,
    name: 'Nguyễn Văn C',
    end_date: '22/02/2025',
    quantity: 10,
    link: 'https://www.google.com',
    created_by: 'domo@domo.com.vn',
    status: 2,
  },
  {
    uuid: 4,
    name: 'Nguyễn Văn D',
    end_date: '22/02/2025',
    quantity: 10,
    link: 'https://www.google.com',
    created_by: 'domo@domo.com.vn',
    status: 1,
  },
  {
    uuid: 5,
    name: 'Nguyễn Văn E',
    end_date: '22/02/2025',
    quantity: 10,
    link: 'https://www.google.com',
    created_by: 'domo@domo.com.vn',
    status: 1,
  },
  {
    uuid: 6,
    name: 'Nguyễn Văn F',
    end_date: '22/02/2025',
    quantity: 10,
    link: 'https://www.google.com',
    created_by: 'domo@domo.com.vn',
    status: 1,
  },
];
export default {
  'POST /api/mock/jobs-list': (req: Request, res: Response) => {
    res.send({
      status: 200,
      data: {
        contents: dataMock,
        paging: {
          page_number: 1,
          page_size: 10,
          total_page: 3,
          total_record: 10,
        },
      },
    });
  },
  'GET /api/mock/view-cv/:id': (req: Request, res: Response) => {
    const params = req.params.id;
    console.log(params);
    if (params) {
      const data = dataMock.find((item) => item.uuid.toString() === params);
      if (data) {
        res.send({
          data: data || null,
          status: 200,
        });
      } else {
        res.status(500).send({
          data: data || null,
          status: 500,
        });
      }
    } else {
      res.status(500).send({
        status: 500,
      });
    }
  },
};
