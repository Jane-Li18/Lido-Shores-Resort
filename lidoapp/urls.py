from django.urls import path
from . import views
from .views import Cart, Message, Order, Product, User, Hotel, Reservation, Rooms

urlpatterns = [
    path("", views.main, name="lido-home"),
    path("components/login/", views.login, name="login"),

    path("rooms/10roomrates/", views.roomrates, name="roomrates"),
    path("rooms/villa2/", views.villa2, name="villa2"),
    path("rooms/villa4/", views.villa4, name="villa4"),
    path("rooms/hut/", views.hut, name="hut"),
    path("rooms/cove5/", views.cove5, name="cove5"),

    path("3-2gallery", views.gallery, name="lido-gallery"),

    path('',  views.home_page, name = "homePage"),
    path('about/', views.about_page,),
    path('login/', views.login_page, name = "loginPage" ),
    path('cart/', views.cart, name = "cart" ),
    path('message/', views.message, name = "message" ),
    path('order/', views.place_order, name = "place_order" ),
    path('product/', views.view_products, name = "view_products" ),
    path('user/', views.register_user, name = "register_user" ),
    path('hotel/', views.get_hotel, name = "get_hotel" ),
    path('reservation/', views.get_reservation, name = "get_reservation" ),
    path('rooms/', views.get_rooms, name = "get_rooms" ),
]

