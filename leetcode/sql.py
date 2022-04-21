import sqlite3

# conn = sqlite3.connect('db.sqlite3')
# cur = conn.cursor()

# cur.execute("""CREATE TABLE users(
#     first_name VARCHAR(25) NOT NULL,
#     last_name VARCHAR(25) NOT NULL,
#     email TEXT UNIQUE NOT NULL,
#     password VARCHAR(20) NOT NULL,
#     is_admin BOOLEAN DEFAULT 1
# )""")

# conn.commit()
# conn.close()

def add_user(data):
  conn = sqlite3.connect('db.sqlite3',timeout=100)
  cur = conn.cursor()
  try:
    cur.execute(f"""INSERT INTO users VALUES {data} """)
  finally:
    conn.commit()
    conn.close()



def validate_user(data):
  conn = sqlite3.connect('db.sqlite3')
  cur = conn.cursor()
  user = None
  try:
    cur.execute(f"SELECT * FROM users WHERE email LIKE '{data}' ")
    user = cur.fetchone()
  finally:
    conn.commit()
    conn.close()
  return user


# conn = sqlite3.connect('db.sqlite3')
# cur = conn.cursor()

# cur.execute("""CREATE TABLE problems(
#      title VARCHAR(100),
#      description TEXT,
#     difficulty VARCHAR(100),
#     solution TEXT,
#     userid VARCHAR NOT NULL
#  )""")

# conn.commit()
# conn.close()

def add_problem(data):
  conn = sqlite3.connect('db.sqlite3')
  cur = conn.cursor()
  cur.execute(f"INSERT INTO problems VALUES {data} ")
  conn.commit()
  conn.close()


def get_problem(id):
  conn = sqlite3.connect('db.sqlite3')
  cur = conn.cursor()
  cur.execute(f"SELECT * FROM problems WHERE rowid LIKE {id}")
  problem = cur.fetchone()
  conn.commit()
  conn.close()
  return problem


def get_problems():
  conn = sqlite3.connect('db.sqlite3')
  cur = conn.cursor()
  cur.execute(f"SELECT *,rowid FROM problems")
  problems = cur.fetchall()
  conn.commit()
  conn.close()
  return problems


def update_problem(data,id):
  conn = sqlite3.connect('db.sqlite3')
  cur = conn.cursor()
  cur.execute(f"UPDATE problems SET title ='{data['title']}',description = '{data['description']}',difficulty = '{data['difficulty']}',solution = '{data['solution']}' WHERE rowid LIKE {id}")
  conn.commit()
  conn.close()
  

def del_problem(id):
  conn = sqlite3.connect('db.sqlite3')
  cur = conn.cursor()
  cur.execute(f"DELETE FROM problems WHERE rowid LIKE {id}")
  conn.commit()
  conn.close()
  
  