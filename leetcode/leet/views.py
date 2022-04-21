import json
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import sql

# Create your views here.

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        # fname = request.POST['first_name'],
        fname = json.loads(request.body)['first_name']
        lname = json.loads(request.body)['last_name']
        email = json.loads(request.body)['email']
        password = json.loads(request.body)['password']
        isadmin = json.loads(request.body)['isadmin']
        sql.add_user((fname,lname,email,password,isadmin))
        print(fname,lname,email,password,isadmin)
        return JsonResponse(data={"msg":"User Added"})
    return JsonResponse(data={"alert":"Wrong Request"})

@csrf_exempt
def login(request):
    if request.method == 'POST':
        email = json.loads(request.body)['email']
        password = json.loads(request.body)['password']
        user = sql.validate_user(email)
        if user:
            if password == user[3]:
                return JsonResponse(data={"fname":user[0],"lname":user[1],"email":user[2],"isadmin":user[4]})
            return JsonResponse(data={"Wrong Password"})
        return JsonResponse(data={"Wrong email"})
    return JsonResponse(data={"alert":"Wrong Request"})

@csrf_exempt
def addproblem(request):
    if request.method == 'POST':
        print(request.body)
        title = json.loads(request.body)['title']
        description = json.loads(request.body)['description']
        difficulty = json.loads(request.body)['difficulty']
        solution = json.loads(request.body)['solution']
        # userid = json.loads(request.body)['userid']

        sql.add_problem((title,description,difficulty,solution,1))
        return JsonResponse(data={"msg":"Problem Added"})
    return JsonResponse(data={"alert":"Wrong Request"})

@csrf_exempt
def getproblem(request,id):
    if request.method == 'GET':
        problem = sql.get_problem(id)
        return JsonResponse(data={'title':problem[0],'description':problem[1],'difficulty':problem[2],'solution':problem[3]})


@csrf_exempt
def getproblems(request):
    if request.method == 'GET':
        problems = sql.get_problems()
        data=[]
        print(problems)
        for problem in problems:
            data.append({'title':problem[0],'description':problem[1],'difficulty':problem[2],'solution':problem[3],'id':problem[5]})
        return JsonResponse(data={'data':data})

@csrf_exempt
def updateproblem(request,id):
    if request.method == 'PUT':
        #problems = sql.update_problem()
        title = json.loads(request.body)['title']
        description = json.loads(request.body)['description']
        difficulty = json.loads(request.body)['difficulty']
        solution = json.loads(request.body)['solution']
        #userid = json.loads(request.body)['userid']
        sql.update_problem({'title':title,'description':description,'difficulty':difficulty,'solution':solution},id)
        return JsonResponse(data={"msg":"updated problem"})


@csrf_exempt
def deleteproblem(request,id):
    if request.method == 'DELETE':
        sql.del_problem(id)
        return JsonResponse(data={"msg":"problem deleted"})








