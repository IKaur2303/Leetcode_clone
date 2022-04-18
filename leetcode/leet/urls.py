from django.urls import path
from leet import views

urlpatterns = [
    path('signup',views.signup),
    path('login',views.login),
    path('addproblem',views.addproblem),
    path('problem/<int:id>',views.getproblem),
    path('problems',views.getproblems),
    path('updateproblem/<int:id>',views.updateproblem),
    path('deleteproblem/<int:id>',views.deleteproblem)
    ]