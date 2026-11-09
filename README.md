# VSign · Tứ Trụ Core

Website giới thiệu đề án VSign và đội Tứ Trụ Core, với hai trang:

- `index.html`: câu chuyện, giải pháp, minh hoạ cách học, đồng hành gia đình, hướng phát triển và lộ trình.
- `doi-ngu.html`: đầy đủ bốn thành viên, vai trò, chuyên ngành, năm học và trường.

Website tĩnh bằng HTML, CSS và JavaScript. Không cần Node.js, npm, Flask, cơ sở dữ liệu hoặc dịch vụ trả phí để chạy. Font, ảnh và mã nguồn được đóng gói cục bộ.

## 1. Xem website trên máy

Giải nén thư mục. Nhấp đúp `index.html` để xem. Hai trang và các nút minh hoạ hoạt động trực tiếp.

Để kiểm tra giống môi trường hosting, có thể mở terminal ở thư mục chứa `index.html`, chạy:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`. Dừng server bằng Ctrl+C. Trên Windows, nếu lệnh `python` không có, dùng `py -m http.server 8000`.

## 2. Chèn ảnh thành viên

1. Chép ảnh vào `assets/team/`.
2. Mở `assets/js/content.js` trong VS Code.
3. Sửa trường `photo` ở đúng thành viên. Ví dụ:

```js
photo: 'assets/team/phuong-anh.jpg',
position: 'center 35%',
```

Tên tệp phải khớp chính xác, kể cả chữ hoa/chữ thường. Gợi ý dùng tên không dấu, không khoảng trắng. Ảnh dọc 4:5 từ 800 × 1000 px, dưới khoảng 500 KB/ảnh là phù hợp.

Thông tin trong `content.js` cũng là nơi sửa tên, vai trò, chuyên ngành, năm học và mô tả đóng góp. Website sử dụng thông tin năm 2 theo bảng thành viên đã cung cấp.

## 2.1. Thay logo bằng ảnh của bạn

Bản cập nhật đã dùng logo bàn tay và trái tim từ dự án VSign gốc, thay cho biểu tượng chữ V minh hoạ. Logo xuất hiện đồng bộ trên thanh đầu trang, chân trang, biểu tượng tab trình duyệt và tâm bông hoa công nghệ ở trang đội ngũ.

Cách đơn giản nhất: thay tệp `assets/images/logo-vsign.png` bằng logo PNG của bạn, giữ nguyên tên. Nên dùng nền trong suốt, ảnh vuông hoặc gần vuông, kích thước tối thiểu khoảng 256 × 256 px.

Nếu muốn giữ tên tệp khác:

1. Đặt ảnh mới trong `assets/images/`, ví dụ `logo-moi.png`.
2. Mở `assets/js/content.js`.
3. Sửa đúng một dòng:

```js
logo: 'assets/images/logo-moi.png',
```

Giữ dấu nháy và dấu phẩy cuối dòng. Lưu file, tải lại trang bằng Ctrl+F5. Thiết lập này áp dụng cho cả hai trang. Nếu đường dẫn logo bị sai, ảnh trên trang sẽ quay về logo VSign mặc định.

Ảnh logo nên chỉ chứa biểu tượng; chữ VSign bên cạnh đã có sẵn trong giao diện. Bông hoa dùng SVG để giữ sắc nét, có các đường mạch điện và nút kết nối. Có thể chỉnh riêng nét trang trí tại `assets/images/tech-flower.svg`; logo ở giữa vẫn lấy từ dòng cấu hình trên.

## 3. Thêm email và liên kết bản sản phẩm

Ở đầu `assets/js/content.js`:

```js
window.VSIGN = {
  logo: 'assets/images/logo-vsign.png',
  projectUrl: '',
  contactEmail: '',
  team: [ /* danh sách có sẵn */ ]
};
```

Thêm email thực tế và địa chỉ HTTPS của bản sản phẩm vào giữa hai dấu nháy. Giữ trống nếu chưa có; liên kết tương ứng sẽ tự ẩn. Không cần tạo tài khoản cho khách xem website.

## 4. Đưa lên GitHub bằng trình duyệt

Đây là cách phù hợp nếu bạn chưa cài Git hoặc chưa kết nối GitHub với VS Code.

1. Đăng nhập GitHub, tạo repository mới, ví dụ `vsign-showcase`. Với tài khoản GitHub Free, chọn repository **Public** để dùng Pages theo cách đơn giản này.
2. Mở repository → **Add file → Upload files**.
3. Kéo **nội dung bên trong thư mục đã giải nén** vào trang upload: `index.html`, `doi-ngu.html`, thư mục `assets` và các tệp hướng dẫn. Không upload riêng file ZIP.
4. Bấm **Commit changes**. Sau bước này, `index.html` phải nằm ngay ở cấp đầu của repository, không nằm thêm trong thư mục `VSign_Showcase`.
5. Vào **Settings → Pages → Build and deployment**.
6. Chọn **Source: Deploy from a branch**, **Branch: main**, thư mục **/(root)**, rồi **Save**.
7. Khi triển khai hoàn tất, GitHub sẽ hiện **Visit site**. Mở liên kết được GitHub cung cấp.

Nếu giao diện GitHub ẩn file `.nojekyll` khi kéo thả, website thuần HTML này vẫn có thể chạy. Có thể dùng **Add file → Create new file** để tạo `.nojekyll` rỗng ngay ở cấp đầu repository.

Hướng dẫn chính thức để đối chiếu:

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 5. Đưa lên GitHub bằng Git trong VS Code

Lưu toàn bộ tệp đang mở bằng **File → Save All** trước khi thao tác. Mở đúng thư mục chứa `index.html` bằng **File → Open Folder**.

Tạo một repository **trống** trên GitHub. Mở terminal trong VS Code và chạy từng dòng:

```bash
git init
git add .
git commit -m "Create VSign project and team showcase"
git branch -M main
```

Sau đó thêm URL repository thật của bạn bằng `git remote add origin`, rồi push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

**Thay `YOUR_USERNAME` và `YOUR_REPOSITORY` bằng thông tin GitHub thực tế trước khi chạy.** Đây là mẫu cú pháp, không phải địa chỉ đã được tạo sẵn. Nếu dùng lại repository đang có remote, xem `git remote -v` trước, không chạy lại `git init` và `remote add` một cách máy móc.

Sau đó bật GitHub Pages theo bước 5–7 của mục trên. Các lệnh này không di chuyển hay xoá file trên máy.

Lần sau, sau khi chỉnh và lưu file:

```bash
git add .
git commit -m "Update team photos and project content"
git push
```

## 6. Chỉnh nội dung và giao diện

| Cần chỉnh | Tệp |
| --- | --- |
| Nội dung trang đề án | `index.html` |
| Giới thiệu chung về đội | `doi-ngu.html` |
| Logo, thông tin và ảnh từng thành viên, email, link sản phẩm | `assets/js/content.js` |
| Màu sắc, font, khoảng cách, bố cục điện thoại | `assets/css/style.css` |
| Menu, tab minh hoạ, hộp tổng quan | `assets/js/main.js` |
| Linh vật và ảnh minh hoạ | `assets/images/` |

Màu chính nằm trong `:root` ở đầu CSS: `--blue`, `--ink`, `--pale`. Menu và footer có ở cả hai tệp HTML; nếu đổi tên menu, sửa nhất quán ở cả hai. Thanh điều hướng trên chỉ giữ Đề án, Đội ngũ và nút kết nối; phần nội dung Giải pháp và Hành trình vẫn được giữ nguyên.

Các đường dẫn đều tương đối để hoạt động cả ở tên miền riêng và đường dẫn repository trên GitHub Pages. Không tự thêm dấu `/` vào đầu `assets/...`.

## 7. Lưu ý về nội dung công khai

- Website này dùng để giới thiệu đội và đề án, không phải bản ứng dụng học có đăng nhập.
- Khu vực trải nghiệm là minh hoạ tương tác: chọn bước học và ảnh A/B/C; không yêu cầu quyền camera, không suy luận AI và không thu thập dữ liệu khách truy cập.
- Phân biệt chức năng prototype hiện có với hướng phát triển tương lai. Không đưa tỷ lệ chính xác chưa kiểm chứng, khách hàng, giải thưởng hay lời chứng thực giả lên trang.
- Chưa đưa bảng giá và dự báo tài chính vào giao diện vì các tài liệu nguồn chưa đồng nhất. Có thể bổ sung sau khi đội chốt số liệu.
- Trước khi gửi đường dẫn cho ban giám khảo, bổ sung ảnh thật, email thật (nếu muốn), kiểm tra chính tả và mở cả hai trang trên điện thoại.
- Các thẻ `og:image` đã trỏ tới ảnh cover cục bộ. Sau khi có tên miền chính thức, nên sửa thành URL HTTPS tuyệt đối của `assets/images/social-cover.jpg` trong cả hai tệp HTML để các nền tảng chia sẻ đọc ảnh ổn định hơn.

## 8. Khi gặp lỗi

- **GitHub Pages hiện 404:** kiểm tra `index.html` ở cấp đầu repository, nhánh `main`, thư mục `/(root)` và trạng thái triển khai trong tab Actions.
- **Không thấy ảnh:** kiểm tra đường dẫn trong `content.js`, tên file đúng chữ hoa/chữ thường, ảnh đã được upload vào `assets/team`.
- **Sửa nhưng chưa thấy thay đổi:** chờ GitHub triển khai xong rồi dùng Ctrl+F5 hoặc mở cửa sổ riêng tư.
- **Trang chỉ hiện một danh sách thư mục:** bạn đang mở nhầm thư mục cha; mở thư mục có `index.html`.

Nguồn và giấy phép tài nguyên: xem `ASSET_CREDITS.md`. Kết quả xác minh kỹ thuật: xem `KIEM_TRA.md`.
