jQuery(document).ready(function($) {

    $("#infoForm").validate({
        rules: {
            storeName: {
                required: true,
                minlength: 2
            },
            phoneNumber: {
                required: true,
                number:true,
                minlength: 7,
                maxlength: 11
            }
        },
        messages: {
            storeName: {
                required: "必填，请输入您的实体店名称",
                minlength: "名称过短"
            },
            phoneNumber: {
                required: "必填，请输入您的联系电话",
                number: "请输入正确的手机或固话号码",
                minlength: "字符过短，请输入正确的联系电话",
                maxlength: "字符过长，请输入正确的联系电话"
            }
        }
    });

    $("#addressForm").validate({
        rules: {
            consignee: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                number:true,
                minlength: 7,
                maxlength: 11
            },
            address: {
                required: true,
                minlength: 2
            },
            zipCode: {
                required: false,
                number:true,
                minlength: 6
            }
        },
        messages: {
            consignee: {
                required: "必填，请输入收货人姓名",
                minlength: "名称过短"
            },
            phone: {
                required: "必填，请输入收货人的联系电话",
                number: "请输入正确的手机或固话号码",
                minlength: "字符过短，请输入正确的联系电话",
                maxlength: "字符过长，请输入正确的联系电话"
            },
            address: {
                required: "必填，请输入收货人详细地址",
                minlength: "字符过短，请输详细地址"
            },
            zipCode: {
                number: "请输入正确的邮政编码",
                minlength: "字符过短，请输入正确的邮政编码"
            }
        }
    });

    $("#passwordForm").validate({
        rules: {
            currentPassword: {
                required: true,
                minlength: 6,
                maxlength: 12
            },
            newPassword: {
                required: true,
                minlength: 6,
                maxlength: 12
            },
            confirmPassword: {
                required: true,
                minlength: 6,
                maxlength: 12,
                equalTo: "#newPassword"
            }
        },
        messages: {
            currentPassword: {
                required: "必填，请输入您的当前登录密码",
                minlength: "字符过短，请输入6~12位字符",
                maxlength: "字符过长，请输入6~12位字符"
            },
            newPassword: {
                required: "必填，请输入您的新登录密码",
                minlength: "字符过短，请输入6~12位字符",
                maxlength: "字符过长，请输入6~12位字符"
            },
            confirmPassword: {
                required: "必填，请重新输入您的新密码",
                minlength: "字符过短，请输入6~12位字符",
                maxlength: "字符过长，请输入6~12位字符",
                equalTo: "两次密码输入不一致"
            }
        }
    });

});
