/* Đổi thông tin tại đây. Đường dẫn ảnh tính từ thư mục gốc website.
   Ví dụ photo: 'assets/team/phuong-anh.jpg'. Giữ photo: '' để hiện chữ viết tắt.
   Mỗi ảnh nên là ảnh dọc, ít nhất 800 × 1000 px. */
window.VSIGN = {
  logo: 'assets/images/logo-vsign.png', // Đổi đường dẫn này để thay logo trên cả hai trang và giữa bông hoa.
  projectUrl: '', // Dán link bản sản phẩm sau khi bạn đã triển khai; để trống sẽ ẩn nút.
  contactEmail: '', // Thêm email thật của đội; để trống sẽ ẩn liên kết email.
  team: [
    { id: 'phuong-anh', name: 'Huỳnh Lương Phương Anh', shortName: 'Phương Anh', initials: 'PA',
      role: 'Trưởng nhóm', focus: 'Điều phối · Đối tác · Truyền thông', major: 'Công nghệ truyền thông',
      year: 'Năm 2', school: 'Đại học FPT Đà Nẵng', photo: 'assets/team/phuong-anh.jpg', position: 'center 35%',
      contribution: 'Kết nối con người, điều phối công việc và truyền tải câu chuyện VSign đến cộng đồng.' },
    { id: 'tien-thanh', name: 'Dương Tiến Thành', shortName: 'Tiến Thành', initials: 'TT',
      role: 'Kỹ thuật & Vận hành', focus: 'Công nghệ · Hệ thống · Triển khai', major: 'Trí tuệ nhân tạo',
      year: 'Năm 2', school: 'Đại học FPT Đà Nẵng', photo: 'assets/team/tien-thanh.jpg', position: 'center 35%',
      contribution: 'Phụ trách kỹ thuật và vận hành, đưa ý tưởng của đội thành trải nghiệm sản phẩm cụ thể.' },
    { id: 'nam-khanh', name: 'Nguyễn Nam Khánh', shortName: 'Nam Khánh', initials: 'NK',
      role: 'Thiết kế UX/UI', focus: 'Trải nghiệm · Giao diện · Hình ảnh', major: 'Thiết kế mỹ thuật số',
      year: 'Năm 2', school: 'Đại học FPT Đà Nẵng', photo: 'assets/team/nam-khanh.jpg', position: 'center 35%',
      contribution: 'Chăm chút trải nghiệm và ngôn ngữ hình ảnh, giúp việc học trở nên rõ ràng, gần gũi và dễ tiếp cận.' },
    { id: 'huyen-linh', name: 'Phạm Nguyễn Huyền Linh', shortName: 'Huyền Linh', initials: 'HL',
      role: 'Quản lý tài chính', focus: 'Nguồn lực · Chi phí · Kế hoạch', major: 'Kinh doanh quốc tế',
      year: 'Năm 2', school: 'Đại học FPT Đà Nẵng', photo: 'assets/team/huyen-linh.jpg', position: 'center 35%',
      contribution: 'Theo dõi nguồn lực và kế hoạch tài chính, xây nền tảng cho hướng phát triển bền vững của đề án.' }
  ]
};
