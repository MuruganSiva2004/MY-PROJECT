def valid_email(email):
    if "@" not in email:
        return False
    parts=email.split("@")
    if len(parts)!=2:
        return False
    username,domain=parts
    if not username or not domain:
        return False
    if "." not in domain:
        return False
    return True
email=input("Enter the Email Address:")
if valid_email(email):
    print("Valid Email Address")
else:
    print("Invalid Email Address.!!!")