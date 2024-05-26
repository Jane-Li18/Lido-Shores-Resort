# lidoapp/urls.py
from django.urls import path
from . import views
from .views import home, profile, RegisterView

urlpatterns = [
    path("", home, name='lido-home'),
    # path("", views.main, name='lido-home'),
    path("users/login/", profile, name='users-profile'),
    path("users/register/", RegisterView.as_view(), name='users-register'),
    

    path("rooms/10roomrates/", views.roomrates, name="roomrates"),
    path("rooms/villa2/", views.villa2, name="villa2"),
    path("rooms/villa4/", views.villa4, name="villa4"),
    path("rooms/hut/", views.hut, name="hut"),
    path("rooms/cove5/", views.cove5, name="cove5"),
    path("3-2gallery", views.gallery, name="lido-gallery"),
]
