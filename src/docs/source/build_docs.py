import os 
import subprocess


# a single build step, which keeps conf.py and versions.yaml at the main branch
# in generall we use environment variables to pass values to conf.py, see below
# and runs the build as we did locally
def build_doc(version, tag):
    os.environ["current_version"] = version
    subprocess.run("git checkout " + tag, shell=True)
    subprocess.run("git checkout main -- conf.py", shell=True)
    subprocess.run("git checkout main -- versions.yaml", shell=True)
    subprocess.run("doxygen Doxyfile", shell=True)
    subprocess.run("make html", shell=True)    

# a move dir method because we run multiple builds and bring the html folders to a 
# location which we then push to github pages
def move_dir(src, dst):
    subprocess.run(["mkdir", "-p", dst])
    subprocess.run("mv "+src+'* ' + dst, shell=True)


build_doc("ROS:iron", "ros2:hot")
move_dir(".,/build/html/", "")