from django.shortcuts import render

def main(request):
    return render(request, "@main.html")

def login(request):
    return render(request, "components/login.html")


# Lido Shores Rooms
def roomrates(request):
    return render(request, "rooms/10roomrates.html")

def villa2(request):
    return render(request, "rooms/villa2.html")

def villa4(request):
    return render(request, "rooms/villa4.html")

def hut(request):
    return render(request, "rooms/hut.html")

def cove5(request):
    return render(request, "rooms/cove5.html")


# Lido Shores Galleries
def gallery(request):
    return render(request, "3-2gallery.html")





from django.http import HttpResponse
from django.shortcuts import render,redirect
from .models import Cart, Message, Order, Product, User, Hotel, Reservation, Rooms

def home_page(request):
	return render(request, 'home.html')

def about_page(request):
	return render(request, 'about.html')

def login_page(request):
	return HttpResponse("log in")

def cart(request):
    if request.method == 'POST':
        # Assuming you get these values from the POST request
        user_id = request.POST.get('user_id')
        pid = request.POST.get('pid')
        name = request.POST.get('name')
        price = request.POST.get('price')
        quantity = request.POST.get('quantity')
        image = request.POST.get('image')
        
        # Create a new Cart object and save it to the database
        cart_item = Cart(user_id=user_id, pid=pid, name=name, price=price, quantity=quantity, image=image)
        cart_item.save()
        
        # Redirect to cart page or any other page
        return redirect('cart_page')
    else:
        # Handle GET request (if needed)
        pass

def view_cart(request):
    # Retrieve all cart items
    cart_items = Cart.objects.all()
    
    # Pass cart_items to the template for rendering
    return render(request, 'cart.html', {'cart_items': cart_items})

def message(request):
    if request.method == 'POST':
        # Get data from the POST request
        user_id = request.POST.get('user_id')
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        message_content = request.POST.get('message')
        
        # Create a new Message object and save it to the database
        message = Message(user_id=user_id, name=name, email=email, number=number, message=message_content)
        message.save()
        
        # Redirect to a success page or do something else
        return redirect('success_page')
    else:
        # Handle GET request (if needed)
        return render(request, 'message_form.html')

def place_order(request):
    if request.method == 'POST':
        # Get data from the POST request
        user_id = request.POST.get('user_id')
        name = request.POST.get('name')
        number = request.POST.get('number')
        email = request.POST.get('email')
        method = request.POST.get('method')
        address = request.POST.get('address')
        total_products = request.POST.get('total_products')
        total_price = request.POST.get('total_price')
        placed_on = request.POST.get('placed_on')
        payment_status = request.POST.get('payment_status', 'pending')  # Default value if not provided
        
        # Create a new Order object and save it to the database
        order = Order(user_id=user_id, name=name, number=number, email=email, method=method,
                      address=address, total_products=total_products, total_price=total_price,
                      placed_on=placed_on, payment_status=payment_status)
        order.save()
        
        # Redirect to a success page or do something else
        return redirect('success_page')
    else:
        # Handle GET request (if needed)
        return render(request, 'order_form.html')

def view_orders(request):
    # Retrieve all orders
    orders = Order.objects.all()
    
    # Pass orders to the template for rendering
    return render(request, 'orders.html', {'orders': orders})

def view_products(request):
    # Retrieve all products
    products = Product.objects.all()
    
    # Pass products to the template for rendering
    return render(request, 'products.html', {'products': products})

def view_products_by_category(request, category):
    # Retrieve products filtered by category
    products = Product.objects.filter(category=category)
    
    # Pass products to the template for rendering
    return render(request, 'products.html', {'products': products})

def register_user(request):
    if request.method == 'POST':
        # Assuming you get these values from the POST request
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        user_type = request.POST.get('user_type', 'user')  # Default value if not provided
        image = request.POST.get('image')
        
        # Create a new User object and save it to the database
        user = User(name=name, email=email, password=password, user_type=user_type, image=image)
        user.save()
        
        # Redirect to login page or any other page
        return redirect('login_page')
    else:
        # Handle GET request (if needed)
        pass

def get_user_by_email(email):
    try:
        user = User.objects.get(email=email)
        return user
    except User.DoesNotExist:
        return None

def get_hotel(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        host = request.POST.get('host')
        rating = request.POST.get('rating')
        review = request.POST.get('review')
        adress = request.POST.get('adress')
        facilities = request.POST.get('facilities')

def get_reservation(request):
    if request.method == 'POST':
        check_in = request.POST.get('check_in')
        check_out = request.POST.get('check_out')
        room = request.POST.get('room')
        guest = request.POST.get('guest')
        price = request.POST.get('price')

def get_rooms(request):
    if request.method == 'POST':
        room_type = request.POST.get('room_type')
        capacity = request.POST.get('capacity')
        price = request.POST.get('price')
        size = request.POST.get('size')
        hotel = request.POST.get('hotel')
        status = request.POST.get('status')