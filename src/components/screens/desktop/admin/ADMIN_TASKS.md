# Admin Task Plan For Beginner

แนวคิด:
- ลดจำนวน component ให้เหลือเท่าที่จำเป็นก่อน
- เน้นอ่านง่าย แก้ง่าย และต่อยอดง่าย
- ถ้ายังไม่มีข้อมูลจริง ให้ใช้ mock data ไปก่อน
- ยังไม่ต้องรีบแยก component ย่อยเยอะ ๆ

## Component ที่แนะนำให้มีแค่ 4 ตัวก่อน

### `AdminLayout.jsx`
หน้าที่:
- เป็นโครงหลักของหน้า admin
- มีเมนูด้านข้างหรือเมนูบนสุด
- มี `Outlet` สำหรับสลับหน้า

task:
- [ ] สร้าง layout กลางสำหรับ `/admin`
- [ ] ใส่เมนูไป 3 หน้า: Dashboard, Orders, Customers
- [ ] แสดงชื่อระบบ เช่น `Admin Panel`
- [ ] ทำปุ่ม logout แบบง่าย

### `AdminDashboard.jsx`
หน้าที่:
- เป็นหน้ารวมข้อมูลสั้น ๆ
- เหมาะกับการเริ่มฝึกจัด layout

task:
- [ ] แสดงการ์ดสรุป 3-4 อัน เช่น ยอดขาย, จำนวนออเดอร์, จำนวนลูกค้า
- [ ] แสดงรายการออเดอร์ล่าสุดแบบสั้น ๆ
- [ ] ถ้ายังไม่ทำกราฟ ให้ใช้การ์ดสรุปไปก่อน

### `AdminOrders.jsx`
หน้าที่:
- ดูรายการคำสั่งซื้อ
- ฝึกทำตาราง, map ข้อมูล, ปุ่ม action

task:
- [ ] แสดงตาราง orders
- [ ] แสดงข้อมูลพื้นฐาน: order id, ชื่อลูกค้า, ยอดรวม, status
- [ ] ทำปุ่มเปลี่ยนสถานะง่าย ๆ เช่น `Pending -> Shipped`
- [ ] เพิ่ม filter status ถ้าทำไหว

### `AdminCustomers.jsx`
หน้าที่:
- ดูรายชื่อลูกค้า
- ฝึกแสดงข้อมูลแบบ list/table

task:
- [ ] แสดงตาราง customers
- [ ] แสดงชื่อ, email, จำนวนออเดอร์
- [ ] เพิ่มช่องค้นหาชื่อลูกค้าแบบง่าย
- [ ] กดดูรายละเอียดลูกค้าใน block ด้านข้างหรือใต้ตาราง

## Component ที่ยังไม่จำเป็นตอนเริ่ม

พักไว้ก่อนได้:
- `AdminAnalytics.jsx`
- `AdminSidebar.jsx`
- `AdminHeader.jsx`
- `AdminDataTable.jsx`
- `AdminStatCard.jsx`
- custom hooks หลายไฟล์
- service แยกหลายชั้น

เหตุผล:
- ถ้าแยกเร็วเกินไป มือใหม่จะงงว่าข้อมูลวิ่งมาจากไหน
- เริ่มจากเขียนตรงในแต่ละหน้า จะเห็นภาพ React ชัดกว่า
- ค่อย refactor ตอนเริ่มมีโค้ดซ้ำ

## โครงสร้างที่เหมาะกับมือใหม่

แนะนำให้เริ่มแบบนี้:

```text
admin/
  AdminLayout.jsx
  AdminDashboard.jsx
  AdminOrders.jsx
  AdminCustomers.jsx
  ADMIN_TASKS.md
```

ถ้าจำเป็นค่อยเพิ่ม:

```text
src/data/adminMockData.js
```

ในไฟล์นี้เก็บ:
- mock orders
- mock customers
- mock dashboard stats

## ลำดับการทำงานที่ง่ายสุด

1. ทำ `AdminLayout.jsx` ให้ route ใช้งานได้ก่อน
2. ทำ `AdminDashboard.jsx` ด้วยข้อมูล mock
3. ทำ `AdminOrders.jsx` เป็นตารางง่าย ๆ
4. ทำ `AdminCustomers.jsx` เป็นตารางง่าย ๆ
5. ถ้ามีเวลา ค่อยเพิ่ม filter, search, status update

## กฎง่าย ๆ สำหรับมือใหม่

- 1 หน้า = 1 component ไปก่อน
- อย่าเพิ่งแยก component ย่อย ถ้ายังไม่ได้ใช้ซ้ำ
- อย่าเพิ่งทำกราฟ ถ้ายังทำ table ไม่คล่อง
- ใช้ mock data ก่อน ไม่ต้องรีบต่อ API
- ทำให้แสดงผลได้ก่อน แล้วค่อยทำให้สวย

## MVP ที่ควรได้

ถ้าจะเอาแบบพอดีและทำเสร็จไว:
- [ ] มี route `/admin`
- [ ] มี layout ใช้งานได้
- [ ] มีหน้า dashboard
- [ ] มีหน้า orders
- [ ] มีหน้า customers
- [ ] ใช้ mock data แสดงผลครบ

## ค่อยเพิ่มทีหลัง

หลังจาก 4 หน้าแรกเสร็จแล้ว ค่อยเพิ่ม:
- [ ] `AdminAnalytics.jsx`
- [ ] search / filter ที่ละเอียดขึ้น
- [ ] modal ดูรายละเอียด
- [ ] protected route
- [ ] component ย่อยที่ใช้ซ้ำจริง
