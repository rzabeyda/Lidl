users = []

def create_user(name):
    users.append(name)


def get_users():
    return users


def update_user(index, new_name):
    users[index] = new_name


def delete_user(index):
    users.pop(index)


create_user("Ромик")
create_user("Дашка")
update_user(0, "Роман")
delete_user(1)
print(get_users())