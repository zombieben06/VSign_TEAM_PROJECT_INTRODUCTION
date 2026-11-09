# Xác minh website VSign

## Đã thực hiện

- Kiểm tra cú pháp cả hai tệp JavaScript bằng `node --check`: đạt.
- Kiểm tra cấu trúc hai trang HTML: đúng ngôn ngữ tiếng Việt, mỗi trang một H1, không có ID trùng.
- Kiểm tra 55 đường dẫn cục bộ, tài nguyên và liên kết đến các phần nội dung: không thấy đường dẫn hỏng.
- Xác minh 6 ảnh raster bằng Pillow; biểu tượng SVG được đóng gói cùng mã nguồn.
- Mở hai trang trong Chromium, kiểm tra chữ tiếng Việt, hình minh hoạ, thanh điều hướng và danh sách đầy đủ bốn thành viên.
- Thử menu mở/đóng ở bố cục hẹp và chuyển từ trang đội ngũ về trang đề án: hoạt động.
- Thử ba bước học minh hoạ, đổi ảnh từ A sang B và chế độ ôn tập: nội dung và trạng thái được cập nhật.
- Mở và đóng hộp tổng quan đề án; hộp có vùng cuộn ở màn hình hẹp.
- Kiểm tra chiều rộng CSS viewport khoảng 1363 px, 454 px và 340 px trong Chromium; không quan sát tràn ngang. Các chiều rộng nhỏ được kiểm tra qua zoom trình duyệt, không phải trên điện thoại phần cứng.
- Đã sửa phần quỹ đạo trang trí gây tràn ngang và thay các ký tự trang trí có thể hiển thị sai bằng SVG.
- Không quan sát lỗi JavaScript của website trong các luồng đã thử. Các log từ tiện ích trình duyệt không phải log của website.

## Phạm vi

Đây là website tĩnh giới thiệu đề án. Không chạy model AI, không bật camera và không gửi thông tin liên hệ tới máy chủ. Phần minh hoạ trải nghiệm được ghi rõ trên trang.

Chưa triển khai lên repository GitHub của người dùng; kiểm tra GitHub Pages thực tế được thực hiện sau khi người dùng upload mã nguồn và bật Pages. Chưa kiểm tra trên Safari/iOS hoặc các thiết bị phần cứng khác. Chưa có ảnh thật của thành viên; các vị trí hiện dùng chữ viết tắt đúng theo thông tin đội.

Hướng dẫn chạy, thêm ảnh và public: xem `README.md`.

## Bản cập nhật theo phản hồi

- Bỏ riêng hai liên kết Giải pháp và Hành trình khỏi thanh điều hướng trên ở cả hai trang, bao gồm menu hẹp. Các phần nội dung và liên kết tại chân trang vẫn được giữ lại.
- Dùng logo gốc VSign cho đầu trang, chân trang, biểu tượng tab và tâm bông hoa; không dùng chữ V làm logo.
- Bông hoa được thay bằng SVG bốn cánh với đường mạch điện, các nút kết nối và logo ảnh ở giữa.
- Thêm một trường `logo` trong `assets/js/content.js` để đổi logo đồng bộ ở hai trang. Hướng dẫn chi tiết tại mục 2.1 của README.
- Đã thử đường dẫn logo tuỳ chỉnh trong trình duyệt: các logo trên cả hai trang và favicon đồng bộ theo cấu hình. Đã trả cấu hình về logo VSign mặc định sau kiểm tra.
