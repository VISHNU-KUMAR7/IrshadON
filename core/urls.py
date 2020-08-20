from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Django default admin dashboard
    path('admin/', admin.site.urls),
    # django app linking url 
    path('app/', include('app.urls')),
    
]
