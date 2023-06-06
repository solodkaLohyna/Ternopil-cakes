<?php extract($_POST);
print_r($_POST);
print_r($_FILES);
$upFile = "../uploads/".date("Y_m_d_H_i_s").$_FILES["photo"]["name"];
if(is_uploaded_file($_FILES["photo"]["tmp_name"])) {
    if(!move_uploaded_file($_FILES["photo"]["tmp_name"], $upFile)) {
        echo 0;
        exit;
    }
} else {
    echo 0;
    exit;
}

echo 1;