<?php include 'header.php';?>
    <main>
        <section class="box-payment">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="form-payment">
                            <div class="list-frm">
                                <div class="item-frm-pay">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Thông tin cá nhân</label>
                                            <input type="text" placeholder="*Họ & tên" class="txt_field">
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="*Số điện thoại" class="txt_field">
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Email" class="txt_field">
                                        </div>
                                    </div>
                                </div>
                                <div class="item-frm-pay">
                                    <div class="row">
                                        <div class="col-md-12 mb-0">
                                            <label>Địa chỉ giao hàng</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" placeholder="*Quận" class="txt_field">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" placeholder="Huyện" class="txt_field">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" placeholder="Phường/xã" class="txt_field">
                                        </div>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="*Địa chỉ đầy đủ:   Ví dụ: Số nhà 5, ngõ xx... " class="txt_field">
                                        </div>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="Ghi chú giao hàng" class="txt_field">
                                        </div>
                                    </div>
                                </div>
                                <div class="item-frm-pay">
                                    <div class="row">
                                        <div class="col-md-12 mb-0">
                                            <label>Phương thức thanh toán</label>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="item-method">
                                                <input type="radio" name=""method">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </section>
        <section class="box-subscribe">
            <div class="container">
                <div class="content-subscribe">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="txt-subscribe">
                                <h3>Đăng ký email nhận Khuyến mãi định kỳ</h3>
                                <div class="frm-sub">
                                    <div class="item"><input type="text" placeholder="Nhập địa chỉ email" class="txt_field"></div>
                                    <div class="item item-btn"><input type="submit" value="Send" class="btn_field"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="avarta text-right"><img src="images/avr-sale.png" class="img-fluid" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
<?php include 'footer.php';?>