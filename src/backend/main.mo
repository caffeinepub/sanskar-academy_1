import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Contact = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  let admin = Principal.fromText("2vxsx-fae");

  let contacts = Map.empty<Text, Contact>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (contacts.containsKey(name)) {
      Runtime.trap("Contact with this name already exists.");
    };
    let contact : Contact = {
      name;
      email;
      phone;
      message;
    };
    contacts.add(name, contact);
  };

  public query ({ caller }) func getContacts() : async [Contact] {
    if (caller != admin) {
      Runtime.trap("Only the admin can view contacts.");
    };
    contacts.values().toArray();
  };
};
