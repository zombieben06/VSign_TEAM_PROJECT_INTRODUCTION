# Thêm ảnh thành viên

Đặt 4 ảnh thật vào thư mục này, ví dụ:

- `phuong-anh.jpg`
- `tien-thanh.jpg`
- `nam-khanh.jpg`
- `huyen-linh.jpg`

Mở `assets/js/content.js`, sửa `photo: ''` của từng người thành đường dẫn tương ứng, ví dụ `photo: 'assets/team/phuong-anh.jpg'`.

Ảnh dọc 4:5, từ 800 × 1000 px là phù hợp. Dùng JPG hoặc WebP, nên dưới 500 KB mỗi ảnh. Không đổi dấu nháy, dấu phẩy hay các trường thông tin khác nếu không cần.

Nếu khuôn mặt bị cắt, chỉnh `position: 'center 35%'`. Số phần trăm càng nhỏ, khung hình càng ưu tiên phần phía trên của ảnh. Có thể thử `center 20%` hoặc `center 50%`.

Khi chưa thêm ảnh, website hiển thị thiết kế chữ viết tắt của tên; khi đã thêm ảnh hợp lệ, ảnh tự phủ lên phần này.
