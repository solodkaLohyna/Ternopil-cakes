<?php
const SUBSCRIPTIONS_FILE = './storage/subscriptions.ser';
const ORDERS_WITH_PHOTO = './storage/orders_with_photo';

function getOrdersWithPhoto(){
    $fileContent = file_get_contents(ORDERS_WITH_PHOTO);
    $potatoes = unserialize($fileContent);
    return $potatoes ? $potatoes : [];
}
function addOrdersWithPhoto($params){
    $potatoes = getOrdersWithPhoto();
    $potatoes[] = $params;
    file_put_contents(ORDERS_WITH_PHOTO, serialize($potatoes));
}

/**
 * Дістає список із усіх підписок з файлу
 * @return array
 */
function allSubscriptions()
{
    $fileContent = file_get_contents(SUBSCRIPTIONS_FILE);
    $subscriptions = unserialize($fileContent);
    return $subscriptions ? $subscriptions : [];
}
/**
 * Додає запис нової підписки у файл
 * @param $params
 */
function addSubscription($params)
{
    $subscriptions = allSubscriptions();
    $subscriptions[] = $params;
    file_put_contents(SUBSCRIPTIONS_FILE, serialize($subscriptions));
}


?>
