from django.shortcuts import render, redirect
from django.db import models

class Cart(models.Model):
    user_id = models.IntegerField()
    pid = models.IntegerField()
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    quantity = models.IntegerField()
    image = models.CharField(max_length=100)

class Message(models.Model):
    user_id = models.IntegerField()
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    number = models.CharField(max_length=12)
    message = models.CharField(max_length=500)

class Order(models.Model):
    user_id = models.IntegerField()
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=12)
    email = models.EmailField(max_length=100)
    method = models.CharField(max_length=50)
    address = models.CharField(max_length=500)
    total_products = models.CharField(max_length=1000)
    total_price = models.IntegerField()
    placed_on = models.CharField(max_length=50)
    payment_status = models.CharField(max_length=20, default='pending')

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20)
    details = models.CharField(max_length=500)
    price = models.IntegerField()
    image = models.CharField(max_length=100)

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    user_type = models.CharField(max_length=20, default='user')
    image = models.CharField(max_length=100)

class Hotel(models.Model):
    name=models.CharField(max_length=200)
    host = models.CharField(max_length=200)
    rating=models.DecimalField(blank=True,null=True, max_digits=19, decimal_places=10)
    review=models.IntegerField(blank=True,null=True)
    adress=models.CharField(max_length=200)
    facilities=models.TextField(blank=True)
    
    def __str__(self) :
        return self.name

class Reservation(models.Model):
    ROOM_TYPE = ( 
    ("1", "casita"), 
    ("2", "villa"),
    ("3", "hut"),
    ("4", "cove"),    
    ) 

    check_in = models.DateField(auto_now =False)
    check_out = models.DateField()
    room = models.CharField(max_length=200,choices = ROOM_TYPE)
    guest = models.CharField(max_length=200)
    price=models.DecimalField(blank=True,null=True,  max_digits=19, decimal_places=10)
    
    def __str__(self):
        return self.guest.user.userName

class Rooms(models.Model):
    ROOM_STATUS = ( 
    ("1", "available"), 
    ("2", "not available"),    
    ) 

    ROOM_TYPE = ( 
    ("1", "premium"), 
    ("2", "deluxe"),
    ("3","basic"),    
    ) 

    #type,no_of_rooms,capacity,prices,Hotel
    room_type = models.CharField(max_length=50,choices = ROOM_TYPE)
    capacity = models.IntegerField(default=1)
    price =models.DecimalField(blank=True,null=True,  max_digits=19, decimal_places=10)
    size = models.IntegerField()
    hotel = models.CharField(max_length=200)
    status = models.CharField(choices =ROOM_STATUS,max_length = 15)
    
    def __str__(self):
        return self.hotel.name