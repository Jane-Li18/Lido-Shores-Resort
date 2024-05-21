from django.contrib import admin
from .models import Cart, Message, Order, Product, User, Hotel, Reservation, Rooms

# Register your models here.
admin.site.register(Cart)
admin.site.register(Message)
admin.site.register(Order)
admin.site.register(Product)
admin.site.register(User)
admin.site.register(Hotel)
admin.site.register(Reservation)
admin.site.register(Rooms)